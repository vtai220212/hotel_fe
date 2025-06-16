import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
  border-bottom: 1px solid #ddd;
`;

export const InfoItem = styled.div`
  display: flex;
  width: calc(50% - 10px);
  margin-bottom: 15px;
`;

export const IconColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: #f5f5f5;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;

  span:first-child {
    font-weight: bold;
    color: #333;
    font-size: 18px;
    margin-bottom: 5px;
  }

  span:last-child {
    color: #555;
    font-size: 16px;
  }
`;