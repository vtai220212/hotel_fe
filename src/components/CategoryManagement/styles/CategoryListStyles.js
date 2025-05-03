import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: linear-gradient(145deg, #1c2526, #2e3b3e);
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  font-family: 'Roboto', sans-serif;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; /* 2 cột: Tên danh mục và Hành động */
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #1c2526;
  border-radius: 10px 10px 0 0;
  padding: 15px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
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
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-right: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  background: #2e3b3e;
  color: #e0e0e0;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid #ffd700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #3a4b4e;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 25px;
    border: 2px solid #ffd700;
    background: #2e3b3e;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
  }
`;

export const Cell = styled.div`
  padding: 12px 15px;
  font-size: 14px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

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
    color: #ffd700;
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
    color: #e0e0e0;
  }
`;