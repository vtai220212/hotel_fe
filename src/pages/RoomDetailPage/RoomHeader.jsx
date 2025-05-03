import React from 'react';
import { Header, Title, Status } from './styles/RoomHeaderStyles';

const RoomHeader = ({ title, status }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Status status={status}>
        {status === 'available' ? 'Còn trống' : status === 'booked' ? 'Đã đặt' : 'Đang bảo trì'}
      </Status>
    </Header>
  );
};

export default RoomHeader;