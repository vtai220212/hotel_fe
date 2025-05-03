import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const HeroBackground = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  filter: brightness(50%);
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeroDescription = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
`;