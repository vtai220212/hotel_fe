// src/components/Admin/Rooms.js
import React, { useState, useEffect } from 'react';
// import { getRooms, addRoom, deleteRoom } from '../../services/RoomService';
import { Button, Input, List, RoomsWrapper, Title } from './style';
import { Form } from 'react-router-dom';



const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      const room = await addRoom(newRoom);
      setRooms([...rooms, room]);
      setNewRoom({ name: '', price: '', description: '' });
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  const handleDeleteRoom = async (id) => {
    try {
      await deleteRoom(id);
      setRooms(rooms.filter(room => room._id !== id));
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  return (
    <RoomsWrapper>
      <Title>Quản lý phòng</Title>
      <Form onSubmit={handleAddRoom}>
        <Input
          type="text"
          placeholder="Tên phòng"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
          required
        />
        <Input
          type="number"
          placeholder="Giá phòng"
          value={newRoom.price}
          onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Mô tả"
          value={newRoom.description}
          onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
        />
        <Button type="submit">Thêm phòng</Button>
      </Form>
      <List>
        {rooms.map(room => (
          <Item key={room._id}>
            <div>
              <strong>{room.name}</strong> - {room.price} VNĐ
              <p>{room.description}</p>
            </div>
            <Button onClick={() => handleDeleteRoom(room._id)}>Xóa</Button>
          </Item>
        ))}
      </List>
    </RoomsWrapper>
  );
};

export default Rooms;