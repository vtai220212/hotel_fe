import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #2C2F33;
  min-height: 100vh;
  color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: transparent;
  padding: 10px 20px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & * {
    color: #FFFFFF !important;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const Title = styled.h2`
  color: #007BFF;
  padding-top: 100px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  color: #B0B7C3;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.div`
  color: #FF6B6B;
  text-align: center;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const NoOrdersMessage = styled.div`
  text-align: center;
  color: #B0B7C3;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2C2F33;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
`;

export const TableHeader = styled.thead`
  background-color: #007BFF;
  color: #FFFFFF;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #40444B;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #40444B;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 500;
  color: #FFFFFF;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  @media (max-width: 768px) {
    display: block;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  color: #B0B7C3;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    &:before {
      content: attr(data-label);
      font-weight: bold;
      color: #007BFF;
      margin-right: 10px;
    }
  }
`;

export const LoginPrompt = styled.div`
  padding: 20px;
  text-align: center;
  color: #B0B7C3;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #007BFF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #2C2F33;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  color: #FFFFFF;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #007BFF;
`;

export const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const DetailRow = styled.tr`
  border-bottom: 1px solid #40444B;
`;

export const DetailCell = styled.td`
  padding: 10px;
  color: #B0B7C3;
  &:first-child {
    font-weight: bold;
    color: #007BFF;
  }
`;

export const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background: #FF6B6B;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #cc4c4c;
  }
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  background: #007BFF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.3s;
  margin-right: 5px;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;