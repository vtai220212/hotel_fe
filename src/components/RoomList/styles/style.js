import styled, { keyframes } from 'styled-components';
import { FaBed } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const IconBed = styled(FaBed)`
  font-size: 1.4rem;
`;

export const IconGuest = styled(HiMiniUserGroup)`
  font-size: 1.4rem;
`;

export const HeroWrapper = styled.section`
  position: relative;
  height: 500px;
  padding-top: 80px;
  background: #ffffff; // Background trắng
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    height: 400px;
    padding-top: 60px;
  }

  @media (max-width: 576px) {
    height: 300px;
    padding-top: 70px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000000; // Chữ đen
    animation: ${fadeInUp} 1s ease-out;
    margin-bottom: 20px;
    text-shadow: none; // Xóa bóng chữ vì background trắng
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #000000; // Chữ đen
    animation: ${fadeInUp} 1.2s ease-out;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const RoomsWrapper = styled.section`
  padding: 40px 0;
  background: #ffffff;
`;

export const RoomsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background-position: 50% 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RoomCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const RoomImage = styled.div`
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
`;

export const RoomDiscount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4d4f;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const RoomPrice = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
`;

export const RoomContent = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const RoomDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #666;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const RoomButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  margin: 0 auto;

  &:after {
    content: '→';
    margin-left: 5px;
    font-size: 1.2rem;
  }

  &:hover {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const ViewAllButton = styled.button`
  padding: 30px 0;
  background: none;
  border: none;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  margin: 30px auto 0;

  svg {
    margin-left: 5px;
    font-size: 1.3rem;
  }

  &:hover {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;

    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;

    svg {
      font-size: 1.1rem;
    }
  }
`;