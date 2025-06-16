import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoomCard, RoomImage, RoomContent, RoomPrice, RoomDiscount, RoomDetails, RoomButton, IconBed, IconGuest } from './styles/style';

const RoomItem = ({ id, title, price, discount, beds, guests, image }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <RoomCard onClick={handleNavigate}>
      <RoomImage style={{ backgroundImage: `url(${image})` }}>
        <RoomDiscount>GIẢM {discount}</RoomDiscount>
        <RoomPrice>{price}/ĐÊM</RoomPrice>
      </RoomImage>
      <RoomContent>
        <h3>{title}</h3>
        <RoomDetails>
          <span>
            <IconBed /> {beds} Giường Đôi
          </span>
          <span>
            <IconGuest /> {guests} Người
          </span>
        </RoomDetails>
        <RoomButton
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
        >
          Xem Chi Tiết
        </RoomButton>
      </RoomContent>
    </RoomCard>
  );
};

export default RoomItem;