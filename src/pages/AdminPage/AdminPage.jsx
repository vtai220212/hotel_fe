// src/pages/AdminPage.js
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminWrapper, MainContent } from './style';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import Users from '../../components/UserAdmin/UserAdmin';
import Rooms from '../../components/RoomsAdmin/RoomsAdmin';



const AdminPage = () => {
  const navigate = useNavigate();

  // Kiểm tra quyền admin khi component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <AdminWrapper>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminHeader />
        <MainContent>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="/" element={<Dashboard />} /> {/* Trang mặc định */}
          </Routes>
        </MainContent>
      </div>
    </AdminWrapper>
  );
};

export default AdminPage;