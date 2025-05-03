// DeleteConfirmationModal.jsx
import React from 'react';
import styled from 'styled-components';

const DeleteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DeleteModalContent = styled.div`
  background: #1c2526;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
`;

const DeleteModalTitle = styled.h3`
  color: #ffd700;
  margin-bottom: 15px;
  font-size: 18px;
`;

const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #c82333;
  }
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #5a6268;
  }
`;

const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel, title = 'Bạn có chắc muốn xóa?', message = 'Hành động này không thể hoàn tác.' }) => {
  if (!isOpen) return null;

  return (
    <DeleteModalOverlay>
      <DeleteModalContent>
        <DeleteModalTitle>{title}</DeleteModalTitle>
        <p style={{ color: '#e0e0e0', marginBottom: '20px' }}>{message}</p>
        <DeleteModalButtons>
          <ConfirmButton onClick={onConfirm}>Xóa</ConfirmButton>
          <CancelButton onClick={onCancel}>Hủy</CancelButton>
        </DeleteModalButtons>
      </DeleteModalContent>
    </DeleteModalOverlay>
  );
};

export default DeleteConfirmationModal;