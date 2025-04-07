import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
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
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 480px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  margin-top: 20px;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
    max-width: 400px;
  }

  @media (max-width: 576px) {
    padding: 30px 20px;
    max-width: 100%;
    margin: 10px;
    border-radius: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 576px) {
    gap: 15px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #ffd700, transparent);
    margin: 15px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;

    &::after {
      width: 50px;
    }
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 10px;

    &::after {
      width: 40px;
      margin: 10px auto 0;
    }
  }
`;

export const Input = styled.input`
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #fff;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px 12px;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
  color: #000;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.6s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.2);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

export const Divider = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  position: relative;
  margin: 10px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin: 8px 0;

    &::before,
    &::after {
      width: 25%;
    }
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin: 5px 0;

    &::before,
    &::after {
      width: 20%;
    }
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 576px) {
    gap: 10px;
    margin: 5px 0;
  }
`;

export const SocialButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;

    svg {
      color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const NavigateText = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;