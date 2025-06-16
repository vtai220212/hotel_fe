import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StatBox = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const StatTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #a1b4b6;
`;

export const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;