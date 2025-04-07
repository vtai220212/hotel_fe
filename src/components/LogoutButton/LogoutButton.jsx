// frontend/src/components/LogoutButton/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Đăng xuất thành công!', {
      onClose: () => {
        navigate('/login');
      },
    });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: '#f44336',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Đăng Xuất
    </button>
  );
};

export default LogoutButton;