import styled, { keyframes } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

// Giả sử ảnh banner nằm trong thư mục assets
import HeroBanner from '../../assets/banner.jpg'; // Thay đổi đường dẫn nếu cần

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

// Animation cho nút CTA
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
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
  background-image: url(${HeroBanner}); // Ảnh banner làm nền
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 400px; // Giảm chiều cao trên điện thoại
  }

  @media (max-width: 576px) {
    height: 300px;
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
    color: #ffffff; // Đổi màu chữ thành trắng để nổi bật trên ảnh
    animation: ${fadeInUp} 1s ease-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Thêm bóng chữ để tăng độ tương phản
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

// Services Section
export const ServicesWrapper = styled.section`
  padding: 40px 0;
  background: #ffffff;
  display: block;

  @media (min-width: 769px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Chỉ 1 dịch vụ trên mỗi hàng ngang
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ServiceCard = styled('div').withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'visible', // Lọc prop visible
})`
  display: flex;
  flex-direction: ${(props) => (props.isLeft ? 'row' : 'row-reverse')};
  border-radius: 12px; // Bo tròn các góc của ServiceCard
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServiceImage = styled.div`
  flex: 2; // Ảnh chiếm nhiều không gian hơn (2 phần)
  min-height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 12px; // Bo tròn các góc của ảnh

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 576px) {
    min-height: 150px;
  }
`;

export const ServiceContent = styled.div`
  flex: 1; // Nội dung chiếm ít không gian hơn (1 phần)
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px; // Bo tròn các góc của phần nội dung

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
  }

  .learn-more {
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

    &:after {
      content: '→';
      margin-left: 5px;
      font-size: 1.2rem;
    }

    &:hover {
      color: #d4af37;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
    .learn-more {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 576px) {
    padding: 10px;

    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
    .learn-more {
      font-size: 0.8rem;
    }
  }
`;

// CTA Section
export const CTAWrapper = styled.section`
  padding: 80px 0;
  background: #ffffff;
  text-align: center;
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h2 {
    font-size: 2.8rem;
    color: #d4af37;
    margin-bottom: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    animation: ${fadeInUp} 1s ease-out;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 30px;
    animation: ${fadeInUp} 1.2s ease-out;
  }

  button {
    padding: 15px 40px;
    background: #d4af37;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: ${pulse} 2s infinite;

    &:hover {
      background: transparent;
      color: #d4af37;
      border: 2px solid #d4af37;
      box-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    button {
      padding: 12px 30px;
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
    button {
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }
`;