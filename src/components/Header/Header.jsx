import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderSection, MenuIcon, Logo, ContactLink, AboutLink, AvatarWrapper, Avatar, LoginButton, DropdownMenu, DropdownItem } from "./style";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import LogoImage from "../../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Lấy user từ context
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    if (user && (user._id || user.id)) {
      const userId = user._id || user.id; // Sử dụng _id hoặc id tùy API
      navigate(`/profile/${userId}`);
    } else {
      navigate('/login');
    }
  };

  const handleOrderHistoryClick = () => {
    setDropdownOpen(false);
    navigate('/order-history');
  };

  const handleLogoutClick = () => {
    logout();
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
      const updatedUser = await updateUser(user.id, formData); // Giả định có hàm updateUser
      // setUser(updatedUser); // Cần cập nhật context nếu có
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
    if (user && user.avatar && typeof user.avatar === 'string' && user.avatar.trim() !== '') {
      return <img src={`http://localhost:3001${user.avatar}`} alt="Avatar" />;
    }
    if (user && user.username && typeof user.username === 'string' && user.username.trim() !== '') {
      return <div>{user.username.charAt(0).toUpperCase()}</div>;
    }
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
              <Avatar onClick={() => setDropdownOpen(!dropdownOpen)}>
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