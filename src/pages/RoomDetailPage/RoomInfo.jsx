import React from 'react';
import { InfoContainer, InfoItem, Label, Value } from './styles/RoomInfoStyles';

const RoomInfo = ({ price, discount, beds, guests, area, view }) => {
  return (
    <InfoContainer>
      <InfoItem>
        <Label>🛏️ Giường:</Label>
        <Value>{beds} Giường Đôi</Value>
      </InfoItem>
      <InfoItem>
        <Label>👥 Số khách tối đa:</Label>
        <Value>{guests} Khách</Value>
      </InfoItem>
      <InfoItem>
        <Label>💰 Giá (đã giảm):</Label>
        <Value>{price}/đêm</Value>
      </InfoItem>
      <InfoItem>
        <Label>🎉 Giảm giá:</Label>
        <Value>{discount}</Value>
      </InfoItem>
    </InfoContainer>
  );
};

export default RoomInfo;