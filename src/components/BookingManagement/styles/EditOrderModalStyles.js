import styled from 'styled-components';

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
    max-height: 90vh;
  }
`;

export const ModalTitle = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
    top: 8px;
    right: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  color: #333;

  &:focus {
    outline: none;
    border-color: #6c757d;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  color: #333;

  &:focus {
    outline: none;
    border-color: #6c757d;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #5a6268;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Label = styled.label`
  color: #333;
  font-size: 15px;
  margin-bottom: 5px;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    background: #5a6268;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    margin-left: 5px;
  }
`;