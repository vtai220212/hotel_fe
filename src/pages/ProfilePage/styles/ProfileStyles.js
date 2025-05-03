import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px; /* Đảm bảo nội dung không bị che bởi header */

  @media (max-width: 768px) {
    padding-top: 100px; /* Giảm padding trên mobile */
  }

  @media (max-width: 576px) {
    padding-top: 90px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;