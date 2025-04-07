import React from 'react';
import { RoomCard, RoomImage, RoomContent, RoomPrice, RoomDiscount, RoomDetails, RoomButton, IconBed, IconGuest } from './style';
import { HiMiniUserGroup } from "react-icons/hi2";

const RoomItem = ({ title, price, discount, beds, guests, image }) => {
  return (
    <RoomCard>
      <RoomImage style={{ backgroundImage: `url(${image})` }}>
        <RoomDiscount>GIẢM {discount}</RoomDiscount>
        <RoomPrice>TỪ {price}/ĐÊM</RoomPrice> {/* Di chuyển RoomPrice lên RoomImage */}
      </RoomImage>
      <RoomContent>
        <h3>{title}</h3>
        <RoomDetails>
          <IconBed /> {beds} Giường Đôi
          <IconGuest /> {guests} Người
        </RoomDetails>
        <RoomButton>Xem Chi Tiết </RoomButton>
      </RoomContent>
    </RoomCard>
  );
};

export default RoomItem;