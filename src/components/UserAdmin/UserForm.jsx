import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import {
  ModalOverlay,
  Modal,
  ModalTitle,
  Form,
  FormGroup,
  FormLabel,
  Input,
  Select,
  ModalActions,
  SubmitButton,
  CancelButton,
} from './styles/UserFormStyles';

const API_URL = config.API_URL;

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    avatar: '',
    role: 'customer',
  });

  // Lấy role của người dùng hiện tại từ localStorage
  const currentUser = JSON.parse(localStorage.getItem('user')) || {};
  const currentUserRole = currentUser.role || 'customer';

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: '',
        fullName: user.fullName || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
        avatar: user.avatar || '',
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
        timeout: 10000,
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
    <ModalOverlay>
      <Modal>
        <ModalTitle>{user ? 'Sửa người dùng' : 'Thêm người dùng'}</ModalTitle>
        <Form onSubmit={handleSubmit}>
          {/* Cột 1: username, email, password, fullName */}
          <FormGroup>
            <FormLabel>Tên đăng nhập</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Nhập tên đăng nhập"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Nhập email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Mật khẩu {user && '(Để trống nếu không thay đổi)'}
            </FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required={!user}
              placeholder="Nhập mật khẩu"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Họ và tên</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
            />
          </FormGroup>

          {/* Cột 2: phoneNumber, address, avatar, role */}
          <FormGroup>
            <FormLabel>Số điện thoại</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Địa chỉ</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Nhập địa chỉ"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Avatar URL</FormLabel>
            <Input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="Nhập URL avatar"
            />
          </FormGroup>
          {currentUserRole === 'admin' && (
            <FormGroup>
              <FormLabel>Vai trò</FormLabel>
              <Select name="role" value={formData.role} onChange={handleChange}>
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </Select>
            </FormGroup>
          )}

          {/* Nút Submit và Cancel (chiếm cả 2 cột) */}
          <ModalActions>
            <SubmitButton type="submit">{user ? 'Cập nhật' : 'Thêm'}</SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              Hủy
            </CancelButton>
          </ModalActions>
        </Form>
      </Modal>
    </ModalOverlay>
  );
};

export default UserForm;