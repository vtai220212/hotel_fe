import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomItem from './RoomItem';
import RoomFilter from './RoomFilter';
import Banner from './Banner'; // Import Banner
import { RoomsWrapper, RoomsContainer, RoomsGrid, ViewAllButton } from './styles/style';
import config from '../../config';
import { FaAngleRight } from "react-icons/fa";

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${config.API_URL}/api/rooms`);
        if (!response.ok) {
          throw new Error(`Failed to fetch rooms: ${response.statusText}`);
        }
        const roomsData = await response.json();

        const formattedRooms = roomsData.map(room => {
          const discount = room.discount || 0;
          const discountedPrice = room.price * (1 - discount / 100);
          const formattedPrice = discountedPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });

          return {
            id: room._id,
            title: room.title,
            price: formattedPrice,
            discount: `${discount}%`,
            beds: room.beds || 2,
            guests: room.guests || 4,
            image: room.images && room.images.length > 0 ? `http://localhost:3001${room.images[0].url}` : 'https://placehold.co/300',
          };
        });

        setRooms(formattedRooms);
        setFilteredRooms(formattedRooms);
      } catch (err) {
        setError('Không thể tải danh sách phòng. Vui lòng thử lại sau.');
        console.error('Error fetching rooms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRooms(rooms);
      return;
    }

    const filtered = rooms.filter(room =>
      room.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  }, [searchTerm, rooms]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleViewAll = () => {
    navigate('/rooms');
  };

  if (loading) {
    return (
      <RoomsWrapper>
        <RoomsContainer>
          <p>Đang tải...</p>
        </RoomsContainer>
      </RoomsWrapper>
    );
  }

  if (error) {
    return (
      <RoomsWrapper>
        <RoomsContainer>
          <p style={{ color: 'red' }}>{error}</p>
        </RoomsContainer>
      </RoomsWrapper>
    );
  }

  return (
    <RoomsWrapper>
      <Banner /> {/* Thêm Banner vào đây */}
      <RoomsContainer>
        <RoomFilter onSearchChange={handleSearchChange} />
        <RoomsGrid>
          {filteredRooms.map((room, index) => (
            <RoomItem
              key={index}
              id={room.id}
              title={room.title}
              price={room.price}
              discount={room.discount}
              beds={room.beds}
              guests={room.guests}
              image={room.image}
            />
          ))}
        </RoomsGrid>
        <ViewAllButton onClick={handleViewAll}>
          Xem tất cả phòng <FaAngleRight />
        </ViewAllButton>
      </RoomsContainer>
    </RoomsWrapper>
  );
};

export default RoomsList;