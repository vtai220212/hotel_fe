import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd !important;
  border-radius: 4px;
  overflow-x: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff !important;

  @media (max-width: 768px) {
    border: none !important;
    box-shadow: none;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  background: #f1f3f5 !important;
  font-weight: 600;
  border-bottom: 2px solid #ddd;
`;

export const HeaderCell = styled.div`
  padding: 12px 8px;
  text-align: left;
  font-size: 14px;
  color: #333 !important;
  border-right: 1px solid #ddd;
  white-space: normal;
  overflow-wrap: break-word;
  box-sizing: border-box;

  &:last-child {
    border-right: none;
  }

  &:nth-child(1) {
    flex: 0 0 180px; /* Mã đơn hàng */
  }
  &:nth-child(2) {
    flex: 0 0 100px; /* Loại đặt phòng */
  }
  &:nth-child(3) {
    flex: 0 0 120px; /* Tên phòng */
  }
  &:nth-child(4) {
    flex: 0 0 120px; /* Tên khách hàng */
  }
  &:nth-child(5) {
    flex: 0 0 150px; /* Email */
  }
  &:nth-child(6) {
    flex: 0 0 120px; /* Số điện thoại */
  }
  &:nth-child(7) {
    flex: 0 0 120px; /* Ngày nhận phòng */
  }
  &:nth-child(8) {
    flex: 0 0 120px; /* Ngày trả phòng */
  }
  &:nth-child(9) {
    flex: 0 0 80px; /* Số khách */
  }
  &:nth-child(10) {
    flex: 0 0 80px; /* Số trẻ em */
  }
  &:nth-child(11) {
    flex: 0 0 100px; /* Tổng giá */
  }
  &:nth-child(12) {
    flex: 0 0 100px; /* Trạng thái */
  }
  &:nth-child(13) {
    flex: 0 0 120px; /* Hành động */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  background-color: #fff !important;
  &:hover {
    background: #f9f9f9 !important;
  }
  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff !important;
  }
`;

export const Cell = styled.div`
  padding: 10px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  background-color: #fff !important;

  &:last-child {
    border-right: none;
  }

  &:nth-child(1) {
    flex: 0 0 180px; /* Mã đơn hàng */
  }
  &:nth-child(2) {
    flex: 0 0 100px; /* Loại đặt phòng */
  }
  &:nth-child(3) {
    flex: 0 0 120px; /* Tên phòng */
  }
  &:nth-child(4) {
    flex: 0 0 120px; /* Tên khách hàng */
  }
  &:nth-child(5) {
    flex: 0 0 150px; /* Email */
  }
  &:nth-child(6) {
    flex: 0 0 120px; /* Số điện thoại */
  }
  &:nth-child(7) {
    flex: 0 0 120px; /* Ngày nhận phòng */
  }
  &:nth-child(8) {
    flex: 0 0 120px; /* Ngày trả phòng */
  }
  &:nth-child(9) {
    flex: 0 0 80px; /* Số khách */
  }
  &:nth-child(10) {
    flex: 0 0 80px; /* Số trẻ em */
  }
  &:nth-child(11) {
    flex: 0 0 100px; /* Tổng giá */
  }
  &:nth-child(12) {
    flex: 0 0 100px; /* Trạng thái */
  }
  &:nth-child(13) {
    flex: 0 0 120px; /* Hành động */
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
      white-space: nowrap;

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0;
    border: none;
    width: 100%;
    background-color: #fff !important;
    &:last-child {
      padding-bottom: 0;
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
  color: #444 !important;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    display: block;
    font-size: 12px;
    color: #333 !important;
  }
`;

export const CellContent = styled.span`
  color: #333 !important;
  word-break: break-word;
  background-color: transparent !important;
  min-height: 1em;
  display: inline-block;
  white-space: normal;
  overflow-wrap: break-word;

  &:empty:before {
    content: "Chưa có";
    color: #666 !important;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    color: #222 !important;
  }
`;

export const DeleteModalOverlay = styled.div`
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

export const DeleteModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const DeleteModalTitle = styled.h3`
  color: #dc3545;
  margin-bottom: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DeleteModalText = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ConfirmButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #c82333;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a6268;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;