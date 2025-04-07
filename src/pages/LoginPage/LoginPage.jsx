// src/pages/Auth/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageWrapper, MainContent, FormWrapper, Form, Title, Input, Button, SocialLogin, SocialButton, NavigateText, Divider } from './style';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { loginUser } from '../../services/UserService';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của react-toastify

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Vui lòng điền đầy đủ thông tin');
      toast.error('Vui lòng điền đầy đủ thông tin'); // Hiển thị thông báo lỗi bằng toast
      return;
    }

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user)); // Lưu thông tin người dùng, bao gồm role
      toast.success('Đăng nhập thành công!', {
        onClose: () => {
          // Chuyển hướng sau khi toast đóng (sau 3 giây)
          const user = JSON.parse(localStorage.getItem('user'));
          if (user && user.role === 'admin') {
            navigate('/admin'); // Chuyển hướng đến trang admin nếu là admin
          } else {
            navigate('/'); // Chuyển hướng đến trang chính nếu không phải admin
          }
        },
      });
    } catch (err) {
      const errorMessage = err.message || 'Đăng nhập thất bại';
      setError(errorMessage);
      toast.error(errorMessage); // Hiển thị thông báo lỗi bằng toast
    }
  };

  const handleSocialLogin = (platform) => {
    toast.info(`Đăng nhập bằng ${platform} chưa được triển khai!`); // Sử dụng toast cho thông báo social login
  };

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title>Đăng Nhập</Title>

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <Input
              type="email"
              placeholder="Địa chỉ Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit">
              Đăng Nhập
            </Button>

            <Divider>hoặc đăng nhập với</Divider>

            <SocialLogin>
              <SocialButton onClick={() => handleSocialLogin('Google')}>
                <FaGoogle />
              </SocialButton>
              <SocialButton onClick={() => handleSocialLogin('Facebook')}>
                <FaFacebook />
              </SocialButton>
              <SocialButton onClick={() => handleSocialLogin('GitHub')}>
                <FaGithub />
              </SocialButton>
            </SocialLogin>

            <NavigateText>
              Chưa có tài khoản? {" "}
              <Link to="/register">Đăng ký ngay</Link>
            </NavigateText>
          </Form>
        </FormWrapper>
      </MainContent>
      <Footer />

      <ToastContainer
        position="top-right" // Vị trí của toast
        autoClose={3000} // Thời gian tự động đóng (3 giây)
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Chủ đề tối để phù hợp với giao diện
      />
    </PageWrapper>
  );
};

export default LoginPage;