import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: #2c3e50;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFD700;
  position: sticky;
  top: 0;
  z-index: 900; /* Thấp hơn sidebar (z-index: 1000) */

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #FFD700;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: #DAA520;
  }
`;

const SearchBar = styled.input`
  padding: 8px 15px;
  border: 1px solid #FFD700;
  border-radius: 20px;
  background: #3a4b5e;
  color: #e0e0e0;
  font-size: 14px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #DAA520;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #FFD700;
  }

  div {
    display: flex;
    flex-direction: column;
    color: #FFD700;
    font-size: 14px;

    span:first-child {
      font-weight: 600;
    }

    span:last-child {
      font-size: 12px;
      color: #e0e0e0;
    }
  }
`;

const AdminHeader = ({ toggleSidebar, isSidebarOpen }) => {
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Admin', role: 'Quản trị viên' };

  return (
    <Header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <HamburgerButton onClick={toggleSidebar}>
          {isSidebarOpen ? '✕' : '☰'}
        </HamburgerButton>
        <SearchBar placeholder="Tìm kiếm phòng..." />
      </div>
      <UserProfile>
        <img src="/user.jpg" alt="User" />
        <div>
          <span>{user.username}</span>
          <span>{user.role}</span>
        </div>
      </UserProfile>
    </Header>
  );
};

export default AdminHeader;