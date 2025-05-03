import React from 'react';
import { motion } from 'framer-motion';
import {
  ModalOverlay,
  Modal,
  ModalTitle,
  ModalActions,
  CancelButton,
} from './styles/UserModalStyles';
import { DeleteConfirmButton, Message } from './styles/DeleteModalStyles';

const DeleteModal = ({ isOpen, userToDelete, handleDelete, closeModal }) => {
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
        <ModalTitle>Xác nhận xóa</ModalTitle>
        <Message>
          Bạn có chắc chắn muốn xóa người dùng{' '}
          <strong>{userToDelete?.username}</strong> không?
        </Message>
        <ModalActions>
          <DeleteConfirmButton onClick={handleDelete}>
            Có, Xóa
          </DeleteConfirmButton>
          <CancelButton onClick={closeModal}>
            Hủy
          </CancelButton>
        </ModalActions>
      </motion.div>
    </ModalOverlay>
  );
};

export default DeleteModal;