// src/components/BackToTop/BackToTopStyles.js
import styled from 'styled-components';

const BackToTopButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible',
})`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: #1a1a5e; /* Xanh navy đậm */
  color: #ffd700; /* Vàng ánh kim */
  border: 2px solid rgba(255, 215, 0, 0.2); /* Viền vàng mờ */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #2f2f8a; /* Xanh đậm hơn khi hover */
    border-color: #ffd700; /* Viền vàng nổi bật */
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  svg {
    font-size: 24px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 576px) {
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    width: 40px;
    height: 40px;

    &:hover {
      transform: translateX(50%) translateY(-5px); /* Giữ căn giữa khi hover */
    }

    svg {
      font-size: 18px;
    }
  }

  /* Điều chỉnh để tránh chồng lấn với chat box */
  @media (min-width: 769px) {
    bottom: 80px;
  }
`;

export { BackToTopButton };