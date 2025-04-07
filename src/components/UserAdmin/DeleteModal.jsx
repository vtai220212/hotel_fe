// frontend/src/components/UserAdmin/DeleteModal.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Thêm Framer Motion
import {
  ModalOverlay,
  Modal,
  ModalTitle,
  ModalActions,
  DeleteConfirmButton,
  CancelButton,
} from './UserAdminStyles';

const DeleteModal = ({ isOpen, userToDelete, handleDelete, closeModal }) => {
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
        <ModalTitle>Confirm Deletion</ModalTitle>
        <p>
          Are you sure you want to delete user{' '}
          <strong>{userToDelete?.username}</strong>?
        </p>
        <ModalActions>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DeleteConfirmButton onClick={handleDelete}>
              Yes, Delete
            </DeleteConfirmButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CancelButton onClick={closeModal}>
              Cancel
            </CancelButton>
          </motion.div>
        </ModalActions>
      </motion.div>
    </ModalOverlay>
  );
};

export default DeleteModal;