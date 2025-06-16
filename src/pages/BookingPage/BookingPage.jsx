import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import HeaderComponent from '../../components/Header/Header';
import { useAuth } from '../../context/AuthContext';
import UserInfoForm from './UserInfoForm';
import ConfirmBooking from './ConfirmBooking';
import config from '../../config';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkInDate, checkOutDate, guests, children, price, roomId } = location.state || {};
  const { token, userId } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [checkIn, setCheckIn] = useState(checkInDate ? dayjs(checkInDate) : null);
  const [checkOut, setCheckOut] = useState(checkOutDate ? dayjs(checkOutDate) : null);

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    const diffTime = endDate.diff(startDate, 'day');
    return diffTime > 0 ? diffTime : 1;
  };

  const days = calculateDays(checkIn, checkOut);
  const originalPrice = price ? parseFloat(price.replace(/[^0-9.-]+/g, '').replace(/\./g, '')) : 0;
  const totalPrice = originalPrice * days;

  const handleFormSubmit = (data) => {
    console.log('Form data received:', data); // Debug
    setFormData(data);
  };

  const handleBookingSubmit = async () => {
    if (!userId || !token) {
      alert('Vui lòng đăng nhập để đặt phòng!');
      navigate('/login');
      return;
    }

    const bookingData = {
      ...formData,
      userId,
      roomId,
      checkIn: checkIn ? checkIn.format('YYYY-MM-DD') : null,
      checkOut: checkOut ? checkOut.format('YYYY-MM-DD') : null,
      guests: guests || 1,
      children: children || 0,
      totalPrice,
    };

    console.log('BookingPage - Sending booking data:', bookingData);
    console.log('BookingPage - Token:', token);

    const apiUrl = config.API_URL;
    try {
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const result = await response.json();
      console.log('BookingPage - API Response:', result);
      if (response.ok) {
        const bookingId = result._id;
        alert(`Đặt phòng thành công! Mã đơn hàng của bạn là: ${bookingId}`);
        navigate('/order-history');
      } else {
        alert(`Đặt phòng thất bại: ${result.message || 'Lỗi không xác định'}`);
      }
    } catch (error) {
      console.error('Lỗi khi gửi booking:', error);
      alert('Đặt phòng thất bại!');
    }
  };

  return (
    <Box>
      <HeaderComponent />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h1" gutterBottom align="center">
          Đặt Phòng
        </Typography>

        <Card sx={{ mb: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Tóm tắt đặt phòng
            </Typography>
            <Typography variant="body1">
              <strong>Ngày nhận phòng:</strong> {checkIn ? checkIn.format('YYYY-MM-DD') : 'Không xác định'}
            </Typography>
            <Typography variant="body1">
              <strong>Ngày trả phòng:</strong> {checkOut ? checkOut.format('YYYY-MM-DD') : 'Không xác định'}
            </Typography>
            <Typography variant="body1">
              <strong>Số người lớn:</strong> {guests || 1}
            </Typography>
            <Typography variant="body1">
              <strong>Số trẻ em:</strong> {children || 0}
            </Typography>
            <Typography variant="body1">
              <strong>Giá mỗi đêm:</strong>{' '}
              {originalPrice ? originalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Không xác định'}
            </Typography>
            <Typography variant="body1">
              <strong>Tổng giá:</strong>{' '}
              {totalPrice ? totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Không xác định'}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Thông tin đặt phòng
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" gutterBottom>
                  Ngày nhận phòng
                </Typography>
                <DatePicker
                  value={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  format="DD/MM/YYYY"
                  disabledDate={(current) => current && current < dayjs().startOf('day')}
                  style={{ width: '100%' }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" gutterBottom>
                  Ngày trả phòng
                </Typography>
                <DatePicker
                  value={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  format="DD/MM/YYYY"
                  disabledDate={(current) => current && current < (checkIn || dayjs()).startOf('day')}
                  style={{ width: '100%' }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <UserInfoForm onSubmit={handleFormSubmit} />
          </CardContent>
        </Card>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <ConfirmBooking
            formData={formData}
            checkInDate={checkIn ? checkIn.format('YYYY-MM-DD') : null}
            checkOutDate={checkOut ? checkOut.format('YYYY-MM-DD') : null}
            guests={guests || 1}
            children={children || 0}
            price={price}
            roomId={roomId}
            totalPrice={totalPrice}
            userId={userId}
            token={token}
            onSubmit={handleBookingSubmit}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BookingPage;