// frontend/src/components/UserAdmin/UserModal.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Thêm Framer Motion
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
} from './UserAdminStyles';

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
        as={Modal} // Sử dụng styled component Modal
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ModalTitle>{isEditMode ? 'Edit User' : 'Add User'}</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
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
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password {isEditMode && '(Leave blank to keep unchanged)'}</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required={!isEditMode}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>
          </FormGroup>
          <ModalActions>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <SubmitButton type="submit">
                {isEditMode ? 'Update' : 'Add'}
              </SubmitButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CancelButton type="button" onClick={closeModal}>
                Cancel
              </CancelButton>
            </motion.div>
          </ModalActions>
        </Form>
      </motion.div>
    </ModalOverlay>
  );
};

export default UserModal;