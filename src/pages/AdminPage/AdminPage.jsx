import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminWrapper, MainContent } from './style';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import Users from '../../components/UserAdmin/UserAdmin';
import Rooms from '../../components/RoomManagement/RoomManagement';
import Category from '../../components/CategoryManagement/CategoryManagement';
import Booking from '../../components/BookingManagement/OrderManagement';

const AdminPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar ẩn mặc định

  // Kiểm tra quyền admin hoặc staff khi component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || (user.role !== 'admin' && user.role !== 'staff')) {
      navigate('/login');
    }
  }, [navigate]);

  // Hàm để bật/tắt sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Đóng sidebar khi click bên ngoài
  const handleOutsideClick = (e) => {
    if (isSidebarOpen && !e.target.closest('aside')) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <AdminWrapper onClick={handleOutsideClick}>
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent>
        <AdminHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="category" element={<Category />} />
          <Route path="bookings" element={<Booking />} />

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainContent>
    </AdminWrapper>
  );
};

export default AdminPage;