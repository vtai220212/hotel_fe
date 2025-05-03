import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoomCard, RoomImage, RoomContent, RoomPrice, RoomDiscount, RoomDetails, RoomButton, IconBed, IconGuest } from './style';

const RoomItem = ({ id, title, price, discount, beds, guests, image }) => {
  const navigate = useNavigate();

  // Hàm xử lý chuyển hướng khi click vào RoomCard hoặc RoomButton
  const handleNavigate = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <RoomCard onClick={handleNavigate} style={{ cursor: 'pointer' }}>
      <RoomImage style={{ backgroundImage: `url(${image})` }}>
        <RoomDiscount>GIẢM {discount}</RoomDiscount>
        <RoomPrice>{price}/ĐÊM</RoomPrice>
      </RoomImage>
      <RoomContent>
        <h3>{title}</h3>
        <RoomDetails>
          <IconBed /> {beds} Giường Đôi
          <IconGuest /> {guests} Người
        </RoomDetails>
        <RoomButton
          onClick={(e) => {
            e.stopPropagation(); // Ngăn sự kiện click của RoomCard khi click vào nút
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