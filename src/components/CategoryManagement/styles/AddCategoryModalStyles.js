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
  background: #000000;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #333333;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #FFFFFF #333333;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333333;
  }

  &::-webkit-scrollbar-thumb {
    background: #FFFFFF;
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
  color: #FFFFFF;
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
  color: #FF6666;
  font-size: 28px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #FF3333;
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
  border-radius: 5px;
  background: #333333;
  color: #FFFFFF;
  border: 1px solid #666666;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #FFFFFF;
    background: #444444;
  }

  &::placeholder {
    color: #999999;
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
  background: #FFFFFF;
  color: #000000;
  padding: 14px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: #E0E0E0;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #666666;
    color: #999999;
    cursor: not-allowed;
    transform: none;
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