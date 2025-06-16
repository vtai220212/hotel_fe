import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #333333;
  margin: 20px 0;
  font-family: 'Roboto', sans-serif;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; /* 2 cột: Tên danh mục và Hành động */
  background: #FFFFFF;
  color: #000000;
  border-radius: 5px 5px 0 0;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderCell = styled.div`
  padding: 12px 15px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid #E0E0E0;

  &:last-child {
    border-right: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  color: #FFFFFF;
  margin-bottom: 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  border: 1px solid #333333;

  &:hover {
    background: #222222;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 25px;
    border: 1px solid #333333;
    background: #111111;
    border-radius: 8px;
  }
`;

export const Cell = styled.div`
  padding: 12px 15px;
  font-size: 14px;
  text-align: center;
  border-right: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }

  &:last-child {
    display: flex;
    gap: 10px;
    justify-content: center;

    button {
      padding: 8px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    button:first-child {
      background: #FFFFFF;
      color: #000000;
    }

    button:first-child:hover {
      background: #E0E0E0;
    }

    button:last-child {
      background: #FF6666;
      color: #FFFFFF;
    }

    button:last-child:hover {
      background: #FF3333;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-right: none;
    border-bottom: 1px solid #333333;

    &:last-child {
      border-bottom: none;
      justify-content: flex-end;

      button {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }
`;

export const CellLabel = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 14px;
    width: 40%;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const CellContent = styled.div`
  @media (max-width: 768px) {
    width: 60%;
    text-align: right;
    font-size: 14px;
    color: #E0E0E0;
  }
`;