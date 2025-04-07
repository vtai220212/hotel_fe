// src/components/Admin/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartBar, FaUsers, FaBed, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { SidebarWrapper, SidebarItem } from './style,';



const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <SidebarWrapper>
      <SidebarItem as={Link} to="/admin/dashboard">
        <FaChartBar size={24} />
      </SidebarItem>
      <SidebarItem as={Link} to="/admin/users">
        <FaUsers size={24} />
      </SidebarItem>
      <SidebarItem as={Link} to="/admin/rooms">
        <FaBed size={24} />
      </SidebarItem>
      <SidebarItem as={Link} to="/admin/orders">
        <FaShoppingCart size={24} />
      </SidebarItem>
      <SidebarItem onClick={handleLogout}>
        <FaSignOutAlt size={24} />
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default AdminSidebar;