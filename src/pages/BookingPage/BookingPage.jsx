import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BookingWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BookingPage = () => {
  const location = useLocation();
  const { checkInDate, checkOutDate, guests, children } = location.state || {};

  return (
    <BookingWrapper>
      <h2>Thông tin đặt phòng</h2>
      <p>Ngày đến: {checkInDate || 'Không xác định'}</p>
      <p>Ngày đi: {checkOutDate || 'Không xác định'}</p>
      <p>Người lớn: {guests || 'Không xác định'}</p>
      <p>Trẻ em: {children || 'Không xác định'}</p>
    </BookingWrapper>
  );
};

export default BookingPage;