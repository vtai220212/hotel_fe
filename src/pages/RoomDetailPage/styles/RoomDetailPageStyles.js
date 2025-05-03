import styled from 'styled-components';

const RoomDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const LeftColumn = styled.div`
  flex: 2;
`;

const RightColumn = styled.div`
  width: 300px;
`;

const RoomDescription = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;

export { RoomDetailWrapper, MainContent, LeftColumn, RightColumn, RoomDescription };
