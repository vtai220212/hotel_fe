import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;