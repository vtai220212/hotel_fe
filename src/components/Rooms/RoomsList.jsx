import React, { useState, useEffect } from 'react';
import RoomItem from './RoomItem';
import RoomFilter from './RoomFilter';
import { RoomsWrapper, RoomsContainer, RoomsGrid } from './style';
import { getRooms, getAllCategories } from '../../services/RoomServices';
import PlaceholderImage from '../../assets/banner.jpg';

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const roomsData = await getRooms(selectedCategory);
        const formattedRooms = roomsData.map(room => {
          const discount = room.discount || 0;
          const discountedPrice = room.price * (1 - discount / 100);
          const formattedPrice = discountedPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });

          return {
            id: room._id, // Thêm id để sử dụng cho chuyển hướng
            title: room.title,
            price: formattedPrice,
            discount: `${discount}%`,
            beds: room.beds,
            guests: room.guests,
            image: room.images && room.images.length > 0 ? `http://localhost:3001${room.images[0].url}` : PlaceholderImage,
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
  }, [selectedCategory]);

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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchTerm('');
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
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
      <RoomsContainer>
        <RoomFilter
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
        />
        <RoomsGrid>
          {filteredRooms.map((room, index) => (
            <RoomItem
              key={index}
              id={room.id} // Truyền id vào RoomItem
              title={room.title}
              price={room.price}
              discount={room.discount}
              beds={room.beds}
              guests={room.guests}
              image={room.image}
            />
          ))}
        </RoomsGrid>
      </RoomsContainer>
    </RoomsWrapper>
  );
};

export default RoomsList;