import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

export const Status = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  background-color: ${({ status }) =>
    status === 'available' ? '#28a745' : status === 'booked' ? '#dc3545' : '#ffc107'};
`;