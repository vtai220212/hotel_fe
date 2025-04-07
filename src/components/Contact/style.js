import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f1e9;
`;

export const HeroWrapper = styled.section`
  height: 60vh;
  position: relative;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.7), rgba(212, 175, 55, 0.5)),
    url('/images/contact-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.3), transparent);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 576px) {
    height: 40vh;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  animation: ${fadeIn} 1s ease-out;

  .cta-button {
    padding: 15px 40px;
    background: #d4af37;
    color: #1a1a1a;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);

    &:hover {
      background: #e6d7b2;
      color: #1a1a1a;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
    }
  }

  @media (max-width: 768px) {
    .cta-button {
      padding: 12px 30px;
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    .cta-button {
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  color: #d4af37;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #e6d7b2;
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const FormSection = styled.section`
  padding: 80px 0;
  background: #fff;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 576px) {
    gap: 12px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #2b2525;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  padding: 15px 20px;
  background: #f8f1e9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #2b2525;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px 20px;
  background: #f8f1e9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #2b2525;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background: linear-gradient(135deg, #ffd700 0%, #d4af37 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export const InfoSection = styled.section`
  padding: 80px 0;
  background: #1a1a1a;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const InfoWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  color: #d4af37;
  margin-right: 15px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-right: 12px;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-right: 10px;
  }
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  color: #e6d7b2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

export const MapSection = styled.section`
  padding: 80px 0;
  background: #fff;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const MapWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
    padding: 0 15px;
  }
`;

export const FooterWrapper = styled.footer`
  padding: 40px 0;
  background: #1a1a1a;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 576px) {
    padding: 20px 0;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #e6d7b2;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;