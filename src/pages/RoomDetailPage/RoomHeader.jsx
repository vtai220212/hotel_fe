import React from 'react';
import { Header, Title, Status } from './styles/RoomHeaderStyles';

const RoomHeader = ({ title, status }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Status status={status}>
        {status === 'available' ? 'Còn phòng trống' : status === 'booked' ? 'Đã hết phòng' : 'Đang bảo trì'}
      </Status>
    </Header>
  );
};

export default RoomHeader;