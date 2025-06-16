import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmButton } from './styles/ConfirmBookingStyles';

const ConfirmBooking = ({
  formData,
  checkInDate,
  checkOutDate,
  guests,
  children,
  price,
  roomId,
  totalPrice,
  userId,
  token,
  onSubmit,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <ConfirmButton onClick={handleClick}>Xác nhận đặt phòng</ConfirmButton>
  );
};

export default ConfirmBooking;