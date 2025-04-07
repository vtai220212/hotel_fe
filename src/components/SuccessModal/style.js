import styled from "styled-components";


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 576px) {
    padding: 20px;
    max-width: 300px;
  }
`;

const ModalMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const ModalButton = styled.button`
  padding: 10px 30px;
  background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 576px) {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;

export { Overlay, ModalWrapper, ModalMessage, ModalButton };
