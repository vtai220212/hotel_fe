// src/pages/style.js
import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  background: transparent;
  color: #e0e0e0;

  @media (max-width: 1024px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1001;
    background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
    color: #1a1a1a;
    border: 1px solid #FFD700;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);

    &:hover {
      background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
    }
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;