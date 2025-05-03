import styled from 'styled-components';

export const DeleteConfirmButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  padding: 12px 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333333;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
    width: 100%;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  color: #1A1A1A;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;