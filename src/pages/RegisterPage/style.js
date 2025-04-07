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
  background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);

  header {
    background: transparent !important;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
    pointer-events: none;
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
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 400px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    max-width: 100%;
    margin: 10px;
    border-radius: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 15px;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #ffd700, transparent);
    margin: 10px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 12px;

    &::after {
      width: 40px;
    }
  }

  @media (max-width: 576px) {
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 10px;

    &::after {
      width: 30px;
      margin: 8px auto 0;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 15px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    z-index: 1;
  }

  .toggle-password {
    position: absolute;
    right: 15px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;

    &:hover {
      color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    .icon {
      left: 12px;
      font-size: 1.1rem;
    }

    .toggle-password {
      right: 12px;
    }
  }

  @media (max-width: 576px) {
    .icon {
      left: 10px;
      font-size: 1rem;
    }

    .toggle-password {
      right: 10px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px 12px 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 0.95rem;
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
    padding: 10px 15px 10px 40px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 8px 12px 8px 35px;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
  color: #000;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 8px;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

export const Divider = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  position: relative;
  margin: 20px 0;

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
    margin: 15px 0;

    &::before,
    &::after {
      width: 25%;
    }
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin: 10px 0;

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

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
`;

export const SocialButton = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);

  svg {
    width: 18px;
    height: 18px;
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
    width: 40px;
    height: 40px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 576px) {
    width: 35px;
    height: 35px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const NavigateText = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 10px;

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
    margin-top: 8px;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    
    margin-top: 5px;
  }
`;