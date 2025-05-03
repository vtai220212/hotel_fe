import styled, { keyframes } from 'styled-components';
import HeroBanner from '../../assets/banner.jpg';
import BackgroundList from '../../assets/Square.png';
import { FaBed } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

export const IconBed = styled(FaBed)`
  font-size: 1.4rem;
`;

export const IconGuest = styled(HiMiniUserGroup)`
  font-size: 1.4rem;
`;

// Animation cho các phần tử xuất hiện
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

// Page Wrapper
export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

// Hero Section
export const HeroWrapper = styled.section`
  position: relative; // Để lớp phủ và nội dung nằm trên ảnh nền
  height: 500px; // Chiều cao cố định cho banner
  padding-top: 80px; // Thêm padding-top để tránh đè lên header (giả sử header cao 80px)
  background-image: url(${HeroBanner}); // Ảnh banner làm nền
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; // Đảm bảo hero nằm dưới header

  @media (max-width: 768px) {
    height: 400px; // Giảm chiều cao trên tablet
    padding-top: 60px; // Giảm padding-top nếu header nhỏ hơn trên tablet
  }

  @media (max-width: 576px) {
    height: 300px; // Giảm chiều cao trên điện thoại
    padding-top: 70px; // Giảm padding-top nếu header nhỏ hơn trên điện thoại
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); // Lớp phủ tối với độ mờ 40%
  z-index: 1; // Đảm bảo lớp phủ nằm dưới nội dung
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2; // Đảm bảo nội dung nằm trên lớp phủ
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff; // Màu trắng
    animation: ${fadeInUp} 1s ease-out;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Bóng chữ
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ffffff; // Màu trắng để dễ đọc trên ảnh nền
    animation: ${fadeInUp} 1.2s ease-out;
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

// Rooms Section
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
  grid-template-columns: repeat(3, 1fr); // 3 cột trên PC
  gap: 30px;
  background-image: url(${BackgroundList});
  background-position: 50% 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 cột trên tablet
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 cột trên điện thoại
  }
`;

export const RoomCard = styled.div`
  background: #ffffff;
  border-radius: 12px; // Bo tròn các góc
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const RoomImage = styled.div`
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0; // Bo tròn góc trên

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
  background: #ff4d4f; // Màu nhãn giảm giá
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const RoomPrice = styled.div`
  position: absolute;
  bottom: 10px; // Đặt ở góc dưới
  left: 10px; // Đặt ở góc trái
  font-size: 1rem;
  color: #ffffff; // Màu trắng để nổi bật
  font-weight: 500;
  text-transform: uppercase; // Chữ in hoa
  background: rgba(0, 0, 0, 0.7); // Background đen với độ mờ 70%
  padding: 5px 10px; // Thêm padding để background trông đẹp hơn
  border-radius: 5px; // Bo tròn góc của background
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


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;