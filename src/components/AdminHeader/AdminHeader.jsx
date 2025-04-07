// src/components/Admin/Header.js
import React from 'react';
import { Avatar, HeaderWrapper, Logo, UserInfo } from './style';



const AdminHeader = () => {
  return (
    <HeaderWrapper>
      <Logo>5STAR</Logo>
      <UserInfo>
        {/* <Avatar src="https://via.placeholder.com/30" alt="User Avatar" /> */}
        <span>Admin</span>
      </UserInfo>
    </HeaderWrapper>
  );
};

export default AdminHeader;