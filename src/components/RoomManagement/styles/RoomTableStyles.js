import styled from 'styled-components';

export const TableContainer = styled.div`
  border-radius: 15px;
  background: white;
  font-family: 'Roboto', sans-serif;
  width: 100%; /* Đảm bảo bảng chiếm toàn bộ chiều rộng */

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px 0;
    max-width: 100%; /* Chiếm toàn bộ chiều rộng trên mobile */
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr); /* Chia đều 9 cột */
  color: #1c2526;
  border-radius: 10px 10px 0 0;
  padding: 15px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1;
  background: #f8f9fa;

  @media (max-width: 768px) {
    display: none; /* Ẩn header trên mobile */
  }
`;

export const HeaderCell = styled.div`
  padding: 12px 10px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.3s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: rgba(255, 215, 0, 0.8);
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr); /* Chia đều 9 cột, khớp với HeaderRow */
  background: white;
  color: black;
  margin: 15px 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #3a4b4e;
    color: white;
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
  padding: 12px 10px;
  font-size: 14px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }

  /* Tùy chỉnh cho cột "Hành động" */
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

      &:first-child {
        background: #ffd700; /* Nút "Sửa" */
        color: #1c2526;
      }

      &:last-child {
        background: #ff4d4d; /* Nút "Xóa" */
        color: #fff;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }
  }

  /* Tùy chỉnh cho cột "Ảnh" */
  &:nth-child(8) {
    img {
      border-radius: 5px;
      border: 1px solid #ffd700;
      padding: 2px;
      background: #1c2526;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:last-child {
      border-bottom: none;
    }

    /* Ẩn cột không quan trọng trên mobile */
    &:nth-child(8) { /* Ẩn cột "Ảnh" */
      display: none;
    }
    &:nth-child(3) { /* Ẩn cột "Giảm giá" */
      display: none;
    }
    &:nth-child(7) { /* Ẩn cột "Trạng thái" */
      display: none;
    }

    /* Tùy chỉnh cột "Hành động" trên mobile */
    &:last-child {
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
    font-size: 16px;
    width: 40%;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const CellContent = styled.div`
  @media (max-width: 768px) {
    width: 60%;
    text-align: right;
    font-size: 16px;
    color: #e0e0e0;
  }
`;