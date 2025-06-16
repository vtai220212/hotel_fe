import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const HeroBackground = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  filter: brightness(50%);

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 27px;
    top: 30%; /* Điều chỉnh vị trí để phù hợp với chiều cao giảm */
  }
`;

export const HeroDescription = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 600px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    padding: 0 10px; /* Thêm padding để tránh text dính mép */
    top: 65%; /* Điều chỉnh vị trí để phù hợp với chiều cao giảm */
  }
`;