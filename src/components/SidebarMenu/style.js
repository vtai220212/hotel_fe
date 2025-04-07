// src/components/SidebarMenu/style.js
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 998; /* Giữ z-index thấp hơn SidebarWrapper */
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  z-index: 2000; /* Tăng z-index cao hơn StyledHeader (1000) */
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 576px) {
    width: 200px;
  }
`;

export const SidebarContent = styled.div`
  padding: 80px 20px 20px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 60px 15px 15px;
  }

  @media (max-width: 576px) {
    padding: 50px 10px 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    font-size: 24px;
  }

  @media (max-width: 576px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 15px 0;
  opacity: 0;
  animation: ${slideIn} 0.3s ease forwards;
  animation-delay: ${({ index }) => `${index * 0.1}s`};

  @media (max-width: 768px) {
    margin: 12px 0;
  }

  @media (max-width: 576px) {
    margin: 10px 0;
  }
`;

export const MenuLink = styled.a`
  display: block;
  padding: 15px 20px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 1px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    padding: 10px 12px;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }
`;