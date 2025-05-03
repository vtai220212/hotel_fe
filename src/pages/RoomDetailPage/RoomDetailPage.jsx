import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRoomById } from '../../services/RoomServices';
import HeaderComponent from '../../components/Header/Header';
import RoomHeader from './RoomHeader';
import RoomImages from './RoomImages';
import RoomInfo from './RoomInfo';
import RoomAmenities from './RoomAmenities';
import HotelAmenities from './HotelAmenities';
import BookingForm from './BookingForm';
import { RoomDetailWrapper, MainContent, LeftColumn, RightColumn, RoomDescription } from './styles/RoomDetailPageStyles';
import RoomDetailHero from './RoomDetailHero';


const RoomDetailPage = () => {
  const { id, slug } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const roomData = await getRoomById(id);
        const discount = roomData.discount || 0;
        const discountedPrice = roomData.price * (1 - discount / 100);
        const formattedPrice = discountedPrice.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        });

        setRoom({
          ...roomData,
          price: formattedPrice,
          discount: `${discount}%`,
        });
      } catch (err) {
        setError('Không thể tải thông tin phòng. Vui lòng thử lại sau.');
        console.error('Error fetching room:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

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

  // Hard-code tạm thời cho ngày nhận/trả phòng, số lượng khách, và trẻ em
  const checkInDate = "2025-04-23"; // Định dạng cho input type="date"
  const checkOutDate = "2025-04-24";
  const numberOfGuests = 1;
  const numberOfChildren = 0;

  return (
    <>
      <HeaderComponent />
      <RoomDetailHero />
      <RoomDetailWrapper>
        <RoomImages images={room.images} /> {/* Banner ảnh ở đầu trang */}
        <RoomHeader title={room.title} status={room.status} />
        <MainContent>
          <LeftColumn>
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
              initialCheckInDate={checkInDate}
              initialCheckOutDate={checkOutDate}
              initialGuests={numberOfGuests}
              initialChildren={numberOfChildren}
            />
          </RightColumn>
        </MainContent>
      </RoomDetailWrapper>
    </>
  );
};

export default RoomDetailPage;