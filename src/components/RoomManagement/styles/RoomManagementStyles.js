import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: #f7f8fc;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 10px;
  background: #f7f8fc;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const TableWrapper = styled.div`
  flex: 2;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FormWrapper = styled.div`
  width: 350px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 100vh; /* Giới hạn chiều cao để cuộn */
  overflow-y: auto; /* Cho phép cuộn dọc */
  opacity: 1;

  @media (max-width: 768px) {
    display: none; /* Ẩn form trên mobile */
  }
`;

export const FormButton = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh; /* Giới hạn chiều cao để cuộn */
  overflow-y: auto; /* Cho phép cuộn dọc */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;