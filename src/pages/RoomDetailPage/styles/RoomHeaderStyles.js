import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const Price = styled.div`
  font-size: 18px;
  color: #333;

  del {
    color: #666;
    margin-right: 5px;
  }

  span {
    color: #ff4444;
    font-weight: bold;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
`;

export const Status = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  width: fit-content;
  font-size: 14px;
  color: #fff;
  background-color: ${({ status }) =>
    status === 'available' ? '#28a745' : status === 'booked' ? '#dc3545' : '#ffc107'};
`;


