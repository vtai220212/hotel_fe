import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
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

function App() {
  const { isLoading, progress } = useLoading(2000); // 5000ms = 5 seconds

  return (
    <>
      <LoadingScreen isLoading={isLoading} progress={progress} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;