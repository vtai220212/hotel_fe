import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderSection, MenuIcon, Logo, ContactLink, AboutLink, AvatarWrapper, Avatar, LoginButton, DropdownMenu, DropdownItem } from "./style";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import LogoImage from "../../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from "../../services/UserService";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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
        setUser(parsedUser);
        setFormData({
          username: parsedUser.username || '',
          email: parsedUser.email || '',
          fullName: parsedUser.fullName || '',
          phoneNumber: parsedUser.phoneNumber || '',
          address: parsedUser.address || '',
        });
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    if (user && user.id) {
      navigate(`/profile/${user.id}`);
    } else {
      navigate('/login');
    }
  };

  const handleOrderHistoryClick = () => {
    setDropdownOpen(false);
    navigate('/order-history');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleUpdateInfoClick = () => {
    setDropdownOpen(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    setLoading(true);
    try {
      const updatedUser = await updateUser(user.id, formData);
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      toast.success('Cập nhật thông tin thành công!');
      closeModal();
    } catch (error) {
      toast.error(error.message || 'Cập nhật thông tin thất bại');
    } finally {
      setLoading(false);
    }
  };

  // Logic hiển thị avatar hoặc chữ cái đầu
  const renderAvatarContent = () => {
    // Kiểm tra avatar tồn tại và là chuỗi không rỗng
    if (user.avatar && typeof user.avatar === 'string' && user.avatar.trim() !== '') {
      return <img src={`http://localhost:3001${user.avatar}`} alt="Avatar" />;
    }

    // Nếu không có avatar, hiển thị chữ cái đầu của username
    if (user.username && typeof user.username === 'string' && user.username.trim() !== '') {
      return <div>{user.username.charAt(0).toUpperCase()}</div>;
    }

    // Nếu không có cả avatar và username, hiển thị biểu tượng mặc định
    return <FaUserCircle />;
  };

  return (
    <>
      <StyledHeader>
        <HeaderSection>
          <MenuIcon onClick={toggleMenu} />
        </HeaderSection>

        <HeaderSection>
          <ContactLink onClick={() => navigate('/contact')}>
            Liên Hệ
          </ContactLink>
        </HeaderSection>

        <HeaderSection>
          <Logo src={LogoImage} alt="Logo" />
        </HeaderSection>

        <HeaderSection>
          <AboutLink onClick={() => navigate('/rooms')}>
            Phòng
          </AboutLink>
        </HeaderSection>

        <HeaderSection>
          {user ? (
            <AvatarWrapper ref={dropdownRef}>
              <Avatar onClick={toggleDropdown}>
                {renderAvatarContent()}
              </Avatar>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={handleProfileClick}>
                    Thông tin cá nhân
                  </DropdownItem>
                  <DropdownItem onClick={handleOrderHistoryClick}>
                    Lịch sử đơn hàng
                  </DropdownItem>
                  <DropdownItem onClick={handleLogoutClick}>
                    Đăng xuất
                  </DropdownItem>
                </DropdownMenu>
              )}
            </AvatarWrapper>
          ) : (
            <LoginButton onClick={handleLoginClick}>
              Đăng Nhập
            </LoginButton>
          )}
        </HeaderSection>
      </StyledHeader>

      <SidebarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Cập nhật thông tin</ModalTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Username *</Label>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Họ và tên</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Số điện thoại</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Địa chỉ</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <ButtonGroup>
                <CancelButton type="button" onClick={closeModal}>
                  Hủy
                </CancelButton>
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                </SubmitButton>
              </ButtonGroup>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default HeaderComponent;