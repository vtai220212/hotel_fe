import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10px;
`;

export const ModalContent = styled(motion.div)`
  background: linear-gradient(145deg, #2e3b3e 0%, #1c2526 100%);
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  position: relative;
  border: 2px solid #ffd700;
  scrollbar-width: thin;
  scrollbar-color: #ffd700 #2e3b3e;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2e3b3e;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffd700;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
    max-height: 90vh;
  }

  @media (max-width: 480px) {
    padding: 15px;
    max-height: 95vh;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: #ffd700;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 28px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #cc0000;
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Input = styled.input`
  padding: 12px 20px;
  border-radius: 8px;
  background: #3a4b4e;
  color: #e0e0e0;
  border: 1px solid #ffd700;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
  outline: none;

  &:focus {
    border-color: #daa520;
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.5);
    background: #4a5b5e;
  }

  &::placeholder {
    color: #a0a0a0;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ffd700 0%, #daa520 100%);
  color: #1c2526;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  transition: all 0.4s ease;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);

  &:hover {
    background: linear-gradient(135deg, #daa520 0%, #ffd700 100%);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;