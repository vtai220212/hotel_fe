import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalOverlay = styled(motion.div)`
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
  padding: 10px;
`;

export const ModalContent = styled(motion.div)`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #ddd #fff;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
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
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;

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
  color: #dc3545;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #c82333;
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
  border-radius: 4px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  font-size: 15px;
  transition: border-color 0.3s ease;
  outline: none;

  &:focus {
    border-color: #6c757d;
  }

  &::placeholder {
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const FileInput = styled.input`
  padding: 12px 20px;
  border-radius: 4px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  font-size: 15px;
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 12px 20px;
  border-radius: 4px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  font-size: 15px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  outline: none;

  &:focus {
    border-color: #6c757d;
  }

  option {
    background: #fff;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #6c757d;
  color: #fff;
  padding: 14px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: #5a6268;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ImageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  background: #f1f3f5;

  scrollbar-width: thin;
  scrollbar-color: #ddd #f1f3f5;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f3f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

export const ImageItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 8px;
    margin-bottom: 10px;
  }
`;

export const ImagePreview = styled.img`
  width: 60px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 2px;
  background: #fff;

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;

export const DeleteImageButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #c82333;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;