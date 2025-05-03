import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, FormTitle, FormGroup, Label, Input, Select, Button } from './styles/BookingFormStyles';

const BookingForm = ({ initialCheckInDate, initialCheckOutDate, initialGuests, initialChildren }) => {
  const [checkInDate, setCheckInDate] = useState(initialCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate);
  const [guests, setGuests] = useState(initialGuests);
  const [children, setChildren] = useState(initialChildren);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Điều hướng đến trang /booking với dữ liệu form
    navigate('/booking', {
      state: {
        checkInDate,
        checkOutDate,
        guests,
        children,
      },
    });
  };

  return (
    <FormContainer>
      <FormTitle>Đặt Phòng</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Ngày Đến</Label>
          <Input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Ngày Đi</Label>
          <Input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Người Lớn</Label>
          <Select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Trẻ Em</Label>
          <Select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            required
          >
            {[0, 1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Select>
        </FormGroup>
        <Button type="submit">Đặt Phòng</Button>
      </form>
    </FormContainer>
  );
};

export default BookingForm;