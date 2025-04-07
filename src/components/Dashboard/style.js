import styled from 'styled-components';
export const DashboardWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

export const MetricCard = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const MetricTitle = styled.div`
  font-size: 0.9rem;
  color: #a1b4b6;
  margin-bottom: 10px;
`;

export const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Charts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ChartCard = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  height: 300px;
`;