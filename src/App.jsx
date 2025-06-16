import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLoading } from './hooks/useLoading';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BackToTop from './components/BackToTop/BackToTop';
import RoomsPage from './pages/RoomsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import AdminPage from './pages/AdminPage/AdminPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoomDetailPage from './pages/RoomDetailPage/RoomDetailPage';
import { AuthProvider } from './context/AuthContext.jsx';
import BookingsPage from './components/BookingManagement/OrderManagement.jsx';

const queryClient = new QueryClient();

function App() {
  const { isLoading, progress } = useLoading(1000);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/rooms/:id" element={<RoomDetailPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
        <BackToTop />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;