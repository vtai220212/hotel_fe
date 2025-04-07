import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const loadingDots = keyframes`
  0%, 20% {
    content: '.';
  }
  40%, 60% {
    content: '..';
  }
  80%, 100% {
    content: '...';
  }
`;

const numberAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
  visibility: ${({ $isLoading }) => ($isLoading ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  animation: ${({ $isLoading }) => !$isLoading && fadeOut} 0.5s ease forwards;
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
`;

export const LoadingText = styled.div`
  color: #ffd700;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    animation: ${loadingDots} 1.5s infinite;
    color: #ffd700;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => `${$progress}%`};
    background: #ffd700;
    transition: width 0.1s linear;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }
`;

export const ProgressText = styled.div`
  color: #ffd700;
  font-size: 1.5rem;
  font-weight: 500;
  animation: ${numberAnimation} 0.3s ease;
  min-width: 4ch;
  text-align: center;
`;