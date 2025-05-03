import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: #f7f8fc;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TableWrapper = styled.div`
  flex: 2; /* Tăng tỷ lệ để bảng rộng hơn */
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FormWrapper = styled.div`
  width: 350px; 
  background: #fff;
  overflow-y: auto;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    padding: 10px;
  }
`;