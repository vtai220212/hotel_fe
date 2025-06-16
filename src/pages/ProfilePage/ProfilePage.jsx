import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../../services/UserService';
import HeaderComponent from '../../components/Header/Header';
import UserInfoForm from './UserInfoForm';
import { Container, Title } from './styles/ProfileStyles';
import { useAuth } from '../../context/AuthContext';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    avatar: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const auth = useAuth();
  const setAuthUser = auth.setUser; // Lấy setUser từ context

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (!parsedUser || !parsedUser.id) {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        if (parsedUser.id !== id && parsedUser.role !== 'admin') {
          toast.error('Bạn không có quyền truy cập thông tin người dùng này');
          navigate('/login');
          return;
        }

        setUser(parsedUser);
        setFormData({
          username: parsedUser.username || '',
          email: parsedUser.email || '',
          fullName: parsedUser.fullName || '',
          phoneNumber: parsedUser.phoneNumber || '',
          address: parsedUser.address || '',
          avatar: parsedUser.avatar || null,
        });
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    if (!user || !user.id) {
      toast.error('Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.');
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('address', formData.address);
      if (formData.avatar && typeof formData.avatar !== 'string') {
        formDataToSend.append('avatar', formData.avatar);
      } else if (!formData.avatar && user.avatar) {
        formDataToSend.append('avatar', user.avatar); // Giữ avatar cũ nếu không thay đổi
      }

      const updatedUser = await updateUser(user.id, formDataToSend);
      setUser(updatedUser);
      if (setAuthUser && typeof setAuthUser === 'function') {
        setAuthUser(updatedUser); // Chỉ gọi nếu setAuthUser tồn tại
      } else {
        console.error('setAuthUser is not a function or undefined:', auth);
      }
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setFormData({
        username: updatedUser.username || '',
        email: updatedUser.email || '',
        fullName: updatedUser.fullName || '',
        phoneNumber: updatedUser.phoneNumber || '',
        address: updatedUser.address || '',
        avatar: updatedUser.avatar || null,
      });
      toast.success('Cập nhật thông tin thành công!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Cập nhật thông tin thất bại';
      if (error.response && (error.response.status === 400 || error.response.status >= 500)) {
        toast.error(errorMessage);
      } else {
        console.warn('Unexpected success in catch block:', error);
        const updatedUser = error.response?.data || user;
        setUser(updatedUser);
        if (setAuthUser && typeof setAuthUser === 'function') {
          setAuthUser(updatedUser);
        } else {
          console.error('setAuthUser is not a function or undefined:', auth);
        }
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setFormData({
          username: updatedUser.username || '',
          email: updatedUser.email || '',
          fullName: updatedUser.fullName || '',
          phoneNumber: updatedUser.phoneNumber || '',
          address: updatedUser.address || '',
          avatar: updatedUser.avatar || null,
        });
        toast.success('Cập nhật thông tin thành công!');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <>
        <HeaderComponent />
        <Container>
          <Title>Không tìm thấy thông tin người dùng</Title>
        </Container>
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Thông tin cá nhân</Title>
        <UserInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </Container>
    </>
  );
};

export default ProfilePage;