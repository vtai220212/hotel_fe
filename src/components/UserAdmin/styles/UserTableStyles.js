import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Th = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: 600;
  border-bottom: 2px solid #333333;

  @media (max-width: 1024px) {
    padding: 12px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #DDDDDD;
  color: #000000;

  @media (max-width: 1024px) {
    padding: 12px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #F0F0F0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const CardField = styled.div`
  margin-bottom: 10px;
  color: #000000;
  font-size: 14px;

  strong {
    color: #333333;
  }

  &:last-child {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;