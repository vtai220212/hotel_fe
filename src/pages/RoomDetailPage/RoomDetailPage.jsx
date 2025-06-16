import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomById } from '../../services/RoomServices';
import { createBooking } from '../../services/bookingService';
import HeaderComponent from '../../components/Header/Header';
import RoomHeader from './RoomHeader';
import RoomImages from './RoomImages';
import RoomInfo from './RoomInfo';
import RoomAmenities from './RoomAmenities';
import HotelAmenities from './HotelAmenities';
import { RoomDetailWrapper, MainContent, LeftColumn, RightColumn, RoomDescription } from './styles/RoomDetailPageStyles';
import RoomDetailHero from './RoomDetailHero';
import { useAuth } from '../../context/AuthContext';
import BookingForm from '../../pages/RoomDetailPage/BookingForm';
import dayjs from 'dayjs';

const RoomDetailPage = () => {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const { token, userId } = useAuth();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const roomData = await getRoomById(id);
        console.log('Room data from API:', roomData); // Debug để kiểm tra guests
        const discount = roomData.discount || 0;
        const discountedPrice = roomData.price * (1 - discount / 100);
        const formattedPrice = discountedPrice.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        });

        const updatedRoom = {
          ...roomData,
          price: formattedPrice,
          rawPrice: discountedPrice,
          discount: `${discount}%`,
        };

        setRoom(updatedRoom);
        // Cập nhật guests ngay khi nhận dữ liệu từ API
        if (updatedRoom.guests) {
          setGuests(updatedRoom.guests);
        }
      } catch (err) {
        setError('Không thể tải thông tin phòng. Vui lòng thử lại sau.');
        console.error('Error fetching room:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    const diffTime = endDate.diff(startDate, 'day');
    return diffTime > 0 ? diffTime : 1;
  };

  const handleBooking = async () => {
    if (!userId || !token) {
      setMessage({ text: 'Vui lòng đăng nhập để đặt phòng!', type: 'error' });
      return;
    }

    if (!checkInDate || !checkOutDate || !name || !email || !phone) {
      setMessage({ text: 'Vui lòng điền đầy đủ thông tin!', type: 'error' });
      return;
    }

    const days = calculateDays(checkInDate, checkOutDate);
    const pricePerNight = room.rawPrice;
    const totalPrice = pricePerNight * days;

    if (isNaN(totalPrice) || totalPrice <= 0) {
      setMessage({ text: 'Tổng giá không hợp lệ!', type: 'error' });
      return;
    }

    const checkIn = checkInDate ? dayjs(checkInDate).format('DD-MM-YYYY') : null;
    const checkOut = checkOutDate ? dayjs(checkOutDate).format('DD-MM-YYYY') : null;

    if (!checkIn || !checkOut) {
      setMessage({ text: 'Ngày nhận phòng hoặc trả phòng không hợp lệ!', type: 'error' });
      return;
    }

    const checkInMoment = dayjs(checkIn, 'DD-MM-YYYY');
    const checkOutMoment = dayjs(checkOut, 'DD-MM-YYYY');
    if (checkInMoment.isSame(checkOutMoment) || checkInMoment.isAfter(checkOutMoment)) {
      setMessage({ text: 'Ngày nhận phòng phải trước ngày trả phòng!', type: 'error' });
      return;
    }

    const bookingData = {
      userId,
      roomId: room._id,
      roomTitle: room.title,
      checkIn,
      checkOut,
      guests,
      children,
      totalPrice,
      name,
      email,
      phone,
      address,
    };

    console.log('BookingPage - Sending booking data:', bookingData);

    try {
      const result = await createBooking(bookingData);
      setMessage({ text: `Đặt phòng thành công! Mã đơn hàng của bạn là: ${result._id}. Bạn sẽ được chuyển hướng đến lịch sử đặt phòng...`, type: 'success' });
      setTimeout(() => {
        navigate('/order-history');
      }, 2000);
      setCheckInDate(null);
      setCheckOutDate(null);
      setGuests(room.guests || 1); // Reset về giá trị từ room.guests
      setChildren(0);
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || error.toString();
      setMessage({ text: `Đặt phòng thất bại: ${errorMsg}`, type: 'error' });
      console.error('Lỗi khi gửi booking:', errorMsg);
    }
  };

  if (loading) {
    return (
      <>
        <HeaderComponent />
        <RoomDetailWrapper>Đang tải...</RoomDetailWrapper>
      </>
    );
  }

  if (error || !room) {
    return (
      <>
        <HeaderComponent />
        <RoomDetailWrapper>{error || 'Không tìm thấy phòng'}</RoomDetailWrapper>
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <RoomDetailHero />
      <RoomDetailWrapper>
        <MainContent>
          <LeftColumn>
            <RoomHeader title={room.title} status={room.status} />
            <RoomInfo
              price={room.price}
              discount={room.discount}
              beds={room.beds}
              guests={room.guests}
              area={room.area}
              view={room.view}
            />
            <RoomDescription>{room.description}</RoomDescription>
            <RoomAmenities />
            <HotelAmenities />
          </LeftColumn>
          <RightColumn>
            <BookingForm
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guests={guests}
              setGuests={setGuests}
              children={children}
              setChildren={setChildren}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              address={address}
              setAddress={setAddress}
              room={room}
              onSubmit={handleBooking}
              message={message}
              loading={loading}
            />
          </RightColumn>
        </MainContent>
        <RoomImages images={room.images} />
      </RoomDetailWrapper>
    </>
  );
};

export default RoomDetailPage;