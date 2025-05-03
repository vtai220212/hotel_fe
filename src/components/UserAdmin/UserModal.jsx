import React from 'react';
import { motion } from 'framer-motion';
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
} from './styles/UserModalStyles';

const UserModal = ({
  isOpen,
  isEditMode,
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <motion.div
        as={Modal}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ModalTitle>{isEditMode ? 'Sửa người dùng' : 'Thêm người dùng'}</ModalTitle>
        <Form onSubmit={handleSubmit}>
          {/* Cột 1: username, email, password, fullName */}
          <FormGroup>
            <FormLabel>Tên đăng nhập</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
              placeholder="Nhập email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Mật khẩu {isEditMode && '(Để trống nếu không thay đổi)'}
            </FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required={!isEditMode}
              placeholder="Nhập mật khẩu"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Họ và tên</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Địa chỉ</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Avatar URL</FormLabel>
            <Input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleInputChange}
              placeholder="Nhập URL avatar"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Vai trò</FormLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>
          </FormGroup>

          {/* Nút Submit và Cancel (chiếm cả 2 cột) */}
          <ModalActions>
            <SubmitButton type="submit">
              {isEditMode ? 'Cập nhật' : 'Thêm'}
            </SubmitButton>
            <CancelButton type="button" onClick={closeModal}>
              Hủy
            </CancelButton>
          </ModalActions>
        </Form>
      </motion.div>
    </ModalOverlay>
  );
};

export default UserModal;