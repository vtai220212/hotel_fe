import styled from 'styled-components';

// Description Section Wrapper
export const DescriptionSectionWrapper = styled.section`
  padding: 40px 0;
  height: 80vh;
  background: #ffffff;
`;

// Description Section Container
export const DescriptionSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Description Content
export const DescriptionContentWrapper = styled.div`
  flex: 1;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333; // Màu chữ đậm
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666; // Màu chữ xám
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

export const DescriptionButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: #333; // Màu chữ đậm
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  span {
    margin-left: 5px;
    font-size: 1.2rem;
  }

  &:hover {
    color: #d4af37; // Màu vàng ánh kim khi hover
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

// Description Image
export const DescriptionImageWrapper = styled.div`
  flex: 1;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  border-radius: 40px 0 40px 0;

  @media (max-width: 768px) {
    display: none; // Ẩn hình ảnh trên điện thoại
  }
`;