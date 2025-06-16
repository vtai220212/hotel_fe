import styled from 'styled-components';

export const OccupancySectionStyled = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const OccupancyTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #a1b4b6;
`;

export const OccupancyBar = styled.div`
  background: #1a2526;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const OccupancyFill = styled.div`
  background: #ffd700;
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;