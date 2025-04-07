import styled from 'styled-components';

// Footer Wrapper
export const FooterWrapper = styled.footer`
  background: #1a1a1a; // Nền tối
  color: #ffffff; // Chữ trắng
  padding: 40px 0;
`;

// Footer Container
export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

// Footer Logo
export const FooterLogoWrapper = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: #d4af37; // Màu vàng ánh kim, phù hợp với phong cách khách sạn
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

// Footer Info
export const FooterInfoWrapper = styled.div`
  p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #cccccc; // Chữ xám nhạt
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.85rem;
    }
  }
`;

// Footer Social
export const FooterSocialWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37; // Màu vàng ánh kim khi hover
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

// Footer Copyright
export const FooterCopyrightWrapper = styled.div`
  p {
    margin: 0;
    font-size: 0.85rem;
    color: #999999; // Chữ xám
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;