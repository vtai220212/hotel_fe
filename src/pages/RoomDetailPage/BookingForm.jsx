import React from 'react';
import { TextField, Button, Typography, Alert, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {
  BookingContainer,
  Title,
  DatePickerContainer,
  DatePickerBox,
  DatePickerLabel,
  GuestField,
  PriceInfo,
  PriceText,
  InputField,
  AlertStyled,
  SubmitButton,
} from './styles/BookingFormStyles';

const BookingForm = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  guests,
  setGuests,
  children,
  setChildren,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  room,
  onSubmit,
  message,
  loading,
}) => {
  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    const diffTime = endDate.diff(startDate, 'day');
    return diffTime > 0 ? diffTime : 1;
  };

  const days = calculateDays(checkInDate, checkOutDate);
  const originalPrice = room ? (room.rawPrice || parseFloat(room.price.replace(/[^0-9.-]+/g, '').replace(/\./g, '')) || 0) : 0;
  const totalPrice = originalPrice * days;

  // Các hàm kiểm tra lỗi để đảm bảo trả về boolean
  const isEmailInvalid = email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneInvalid = phone && !/^[0-9]{10}$/.test(phone);
  const isNameInvalid = !name;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BookingContainer>
        <Typography component={Title} variant="h6">
          Đặt phòng
        </Typography>
        <Box component={DatePickerContainer}>
          <Box component={DatePickerBox}>
            <Typography component={DatePickerLabel}>Ngày nhận phòng</Typography>
            <DatePicker
              value={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              format="DD/MM/YYYY"
              disablePast
              slotProps={{ textField: { variant: 'outlined', fullWidth: true } }}
            />
          </Box>
          <Box component={DatePickerBox}>
            <Typography component={DatePickerLabel}>Ngày trả phòng</Typography>
            <DatePicker
              value={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              format="DD/MM/YYYY"
              disablePast
              minDate={checkInDate || undefined}
              slotProps={{ textField: { variant: 'outlined', fullWidth: true } }}
            />
          </Box>
        </Box>
        <GuestField>
          <TextField
            label="Số khách tối đa"
            value={guests}
            disabled
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </GuestField>
        <Box component={PriceInfo}>
          <Typography component={PriceText}>Giá mỗi đêm: {room.price}</Typography>
          <Typography component={PriceText}>
            Tổng giá: {totalPrice ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '0 VND'}
          </Typography>
        </Box>
        <InputField>
          <TextField
            label="Họ và Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            error={isNameInvalid} // Boolean: true nếu name rỗng
            helperText={isNameInvalid ? 'Vui lòng nhập họ và tên' : ''}
          />
        </InputField>
        <InputField>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            error={isEmailInvalid} // Boolean: true nếu email không hợp lệ
            helperText={isEmailInvalid ? 'Email không hợp lệ' : ''}
          />
        </InputField>
        <InputField>
          <TextField
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
            error={isPhoneInvalid} // Boolean: true nếu phone không hợp lệ
            helperText={isPhoneInvalid ? 'Số điện thoại phải có 10 chữ số' : ''}
          />
        </InputField>
        <InputField>
          <TextField
            label="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />
        </InputField>
        {message.text && (
          <AlertStyled>
            <Alert severity={message.type}>
              {message.text}
            </Alert>
          </AlertStyled>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={loading || isNameInvalid || isEmailInvalid || isPhoneInvalid}
          component={SubmitButton}
        >
          Đặt phòng
        </Button>
      </BookingContainer>
    </LocalizationProvider>
  );
};

BookingForm.propTypes = {
  checkInDate: PropTypes.object,
  setCheckInDate: PropTypes.func.isRequired,
  checkOutDate: PropTypes.object,
  setCheckOutDate: PropTypes.func.isRequired,
  guests: PropTypes.number.isRequired,
  setGuests: PropTypes.func.isRequired,
  children: PropTypes.number.isRequired,
  setChildren: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  setAddress: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BookingForm;