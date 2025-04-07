// src/components/SuccessModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { Overlay, ModalWrapper, ModalMessage, ModalButton } from './style';


const SuccessModal = ({ isOpen, message, onClose, redirectPath }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    navigate(redirectPath);
  };

  return (
    <Overlay>
      <ModalWrapper>
        <ModalMessage>
          <FaCheckCircle style={{ color: '#28a745', fontSize: '2rem', marginBottom: '10px' }} />
          <br />
          {message}
        </ModalMessage>
        <ModalButton onClick={handleClose}>OK</ModalButton>
      </ModalWrapper>
    </Overlay>
  );
};

export default SuccessModal;