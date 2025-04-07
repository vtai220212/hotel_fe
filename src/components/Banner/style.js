import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Chiều cao mặc định cho desktop */
  overflow: hidden;

  /* Responsive chiều cao trên mobile */
  @media (max-width: 768px) {
    height: 70vh; /* Giảm chiều cao trên mobile */
  }

  @media (max-width: 480px) {
    height: 60vh; /* Giảm thêm trên màn hình rất nhỏ */
  }
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  /* Đảm bảo video hiển thị tốt trên mobile */
  @media (max-width: 768px) {
    object-fit: cover; /* Giữ nguyên để không bị méo */
  }
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 2;

  /* Responsive font size và padding */
  @media (max-width: 768px) {
    font-size: 18px; /* Giảm font size trên tablet */
    padding: 0 20px; /* Thêm padding để tránh sát lề */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Giảm thêm trên mobile */
    padding: 0 15px;
  }
`;

export const BannerTitle = styled.h1`
  font-family: 'Allison', cursive;
  font-size: 120px;
  margin-bottom: 20px;
  transform: rotate(-2.4deg);

  /* Responsive font size và margin */
  @media (max-width: 1024px) {
    font-size: 90px; /* Giảm font size trên tablet lớn */
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 60px; /* Giảm font size trên tablet */
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 40px; /* Giảm font size trên mobile */
    margin-bottom: 8px;
    transform: rotate(-1.5deg); /* Giảm độ xoay cho phù hợp */
  }
`;

export const ScrollDown = styled(FaAngleDown)`
  font-size: 40px;
  color: white;
  background: transparent;
  border: 1px solid white;
  border-radius: 50%;
  padding: 10px;
  @keyframes scrollDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
animation: scrollDown 1s ease-in-out infinite;
  }

  /* Responsive font size và padding */
  @media (max-width: 768px) {
    font-size: 30px; /* Giảm kích thước trên tablet */
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Giảm kích thước trên mobile */
    padding: 6px;
  }
`;