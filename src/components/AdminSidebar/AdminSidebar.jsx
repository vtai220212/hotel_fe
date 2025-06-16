import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Sử dụng shouldForwardProp để ngăn prop `isOpen` được truyền xuống DOM
const Sidebar = styled.aside.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  color: #FFD700;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid #FFD700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 200px;
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    width: 180px;
    padding: 15px 10px;
  }
`;

const SidebarTitle = styled.h2`
  color: #FFD700;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 5px rgba(255, 215, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const SidebarLink = styled(NavLink)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 16px;
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &.active {
    background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
    color: #1a1a1a;
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
  }

  &:hover {
    background: #3a3a3a;
    color: #FFD700;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const LogoutButton = styled.button`
  margin-top: auto; /* Đẩy nút xuống dưới cùng */
  color: #e0e0e0;
  background: none;
  border: 1px solid #FFD700;
  font-size: 16px;
  padding: 12px 15px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: #FF6666;
    color: #FFFFFF;
    border-color: #FF6666;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Chuyển hướng về trang đăng nhập
    navigate('/login');

    // Đóng sidebar nếu đang mở (trên mobile)
    toggleSidebar();
  };

  return (
    <Sidebar isOpen={isOpen}>
      <SidebarTitle>Admin Menu</SidebarTitle>
      <SidebarLink to="/admin/dashboard" onClick={toggleSidebar}>
        Dashboard
      </SidebarLink>
      <SidebarLink to="/admin/users" onClick={toggleSidebar}>
        Users
      </SidebarLink>
      <SidebarLink to="/admin/rooms" onClick={toggleSidebar}>
        Rooms
      </SidebarLink>
      <SidebarLink to="/admin/category" onClick={toggleSidebar}>
        Category
      </SidebarLink>
      <SidebarLink to="/admin/bookings" onClick={toggleSidebar}>
        Bookings
      </SidebarLink>
      <LogoutButton onClick={handleLogout}>
        Đăng xuất
      </LogoutButton>
    </Sidebar>
  );
};

export default AdminSidebar;