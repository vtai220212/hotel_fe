// src/components/UsersAdmin/UserForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const API_URL = config.API_URL;

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: '',
        role: user.role,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 10000, // Timeout sau 10 giây
      };
      if (user) {
        await axios.put(`${API_URL}/api/users/${user._id}`, formData, config);
      } else {
        await axios.post(`${API_URL}/api/users/add`, formData, config);
      }
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      alert('Có lỗi xảy ra: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="user-form-overlay">
      <form onSubmit={handleSubmit} className="user-form">
        <h3>{user ? 'Sửa người dùng' : 'Thêm người dùng'}</h3>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required={!user} // Chỉ bắt buộc khi thêm mới
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Lưu</button>
        <button type="button" onClick={onClose}>
          Hủy
        </button>
      </form>
    </div>
  );
};

export default UserForm;