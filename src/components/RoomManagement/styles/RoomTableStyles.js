import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  background: #f1f3f5;
  font-weight: 600;
  border-bottom: 2px solid #ddd;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderCell = styled.div`
  padding: 12px 8px;
  text-align: left;
  font-size: 14px;
  color: #333;
  border-right: 1px solid #ddd;
  flex: 1;
  min-width: 0;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  border-bottom: 1px solid #eee;
  background-color: #fff;
  &:hover {
    background: #f9f9f9;
  }
  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
`;

export const Cell = styled.div`
  padding: 10px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-right: 1px solid #eee;
  flex: 1;
  min-width: 0;
  background-color: #fff;
  opacity: 1 !important;

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
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.3s ease;

      &:first-child {
        background: #6c757d;
        color: #fff;
      }

      &:last-child {
        background: #dc3545;
        color: #fff;
      }

      &:hover {
        &:first-child {
          background: #5a6268;
        }
        &:last-child {
          background: #c82333;
        }
      }
    }
  }

  &:nth-child(1) {
    img {
      border-radius: 5px;
      border: 1px solid #ddd;
      padding: 2px;
      background: #fff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0;
    border: none;
    width: 100%;
    background-color: #fff;
    opacity: 1 !important;
    &:last-child {
      padding-bottom: 0;
    }

    &:nth-child(1) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(7) {
      display: none;
    }

    &:last-child {
      justify-content: flex-end;
      button {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }
`;

export const CellLabel = styled.span`
  display: none;
  font-weight: 500;
  color: #444;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    display: block;
    font-size: 12px;
    color: #333;
  }
`;

export const CellContent = styled.span`
  color: #333;
  word-break: break-word;
  opacity: 1 !important;
  background-color: transparent;
  min-height: 1em;
  display: inline-block;

  &:empty:before {
    content: "Chưa có";
    color: #666;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    color: #222;
  }
`;