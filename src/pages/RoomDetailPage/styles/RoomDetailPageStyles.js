import styled from 'styled-components';

export const RoomDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    padding: 10px;
  }

  @media (max-width: 576px) {
    padding: 5px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 2;
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const RoomDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;