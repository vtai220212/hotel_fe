import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { token, userId, logout } = useAuth();

  if (!token || !userId) {
    console.log('ProtectedRoute - No token or userId, redirecting to login:', { token, userId });
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      console.log('ProtectedRoute - Token expired, logging out:', { exp: decoded.exp, currentTime });
      logout();
      return <Navigate to="/login" replace />;
    }

    // Kiểm tra quyền admin (nếu cần, có thể bỏ nếu không dùng user.role)
    if (adminOnly) {
      console.log('ProtectedRoute - Admin only route, redirecting if not admin');
      // Lưu ý: Nếu không dùng localStorage cho user, bạn cần lấy role từ token hoặc API
      return <Navigate to="/" replace />; // Placeholder, cần logic kiểm tra role
    }

    return children;
  } catch (error) {
    console.error('ProtectedRoute - Error decoding token:', error);
    logout();
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;