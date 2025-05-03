import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  background: transparent !important;
  color: white;
  z-index: 998;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  @media (max-width: 576px) {
    padding: 15px 30px;
  }
`;

export const HeaderSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    &:nth-child(2),
    &:nth-child(4) {
      display: none;
    }
  }
`;

export const MenuIcon = styled(FaBars)`
  font-size: 28px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 576px) {
    height: 35px;
  }
`;

export const ContactLink = styled.div`
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 12px;
  }
`;

export const AboutLink = styled.div`
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 12px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ffd700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffd700;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
  color: #000;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 6px 14px;
    font-size: 0.85rem;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  min-width: 180px;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 50px;
    min-width: 160px;
  }

  @media (max-width: 576px) {
    top: 45px;
    min-width: 140px;
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 20px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
`;