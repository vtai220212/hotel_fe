import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import RoomTable from './RoomTable';
import AddRoomForm from './AddRoomForm';
import { getRooms, getAllCategories, createRoom, uploadImage } from '../../services/RoomServices';
import { RoomContainer, TableWrapper, FormWrapper, FormButton, ModalOverlay, ModalContent, CloseButton } from './styles/RoomManagementStyles';
import styled from 'styled-components';

const RoomManagement = () => {
  const queryClient = useQueryClient();

  // State cho form thêm phòng
  const [newRoom, setNewRoom] = useState({
    code: '',
    title: '',
    price: '',
    discount: '',
    beds: '',
    guests: '',
    area: '',
    view: '',
    category: '',
    status: 'available',
    imageFile: null,
    imagePreview: '',
    imageDescription: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lấy danh sách phòng
  const { data: rooms, isLoading: roomsLoading, error: roomsError } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => getRooms(),
  });

  // Lấy danh sách danh mục
  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  // Mutation để tạo phòng
  const createRoomMutation = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(['rooms']);
      setNewRoom({
        code: '',
        title: '',
        price: '',
        discount: '',
        beds: '',
        guests: '',
        area: '',
        view: '',
        category: '',
        status: 'available',
        imageFile: null,
        imagePreview: '',
        imageDescription: '',
      });
      setIsModalOpen(false); // Đóng modal sau khi thành công
    },
  });

  // Mutation để tải ảnh
  const uploadImageMutation = useMutation({
    mutationFn: uploadImage,
  });

  // Xử lý submit form
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (newRoom.imageFile) {
      const formData = new FormData();
      formData.append('image', newRoom.imageFile);
      const uploadResult = await uploadImageMutation.mutateAsync(formData);
      imageUrl = uploadResult.url;
    }

    const roomData = {
      ...newRoom,
      code: newRoom.code,
      title: newRoom.title,
      price: parseFloat(newRoom.price),
      discount: parseFloat(newRoom.discount) || 0,
      beds: parseInt(newRoom.beds),
      guests: parseInt(newRoom.guests),
      area: parseFloat(newRoom.area),
      view: newRoom.view,
      images: imageUrl ? [{ url: imageUrl, description: newRoom.imageDescription || '' }] : [],
    };

    createRoomMutation.mutate(roomData);
  };

  return (
    <RoomContainer>
      <TableWrapper>
        {roomsLoading ? (
          <div style={{ color: '#000', textAlign: 'center' }}>Đang tải phòng...</div>
        ) : roomsError ? (
          <div style={{ color: '#ff4d4d', textAlign: 'center' }}>Lỗi: {roomsError.message}</div>
        ) : (
          <RoomTable
            data={rooms}
            categories={categories}
            categoriesLoading={categoriesLoading}
            categoriesError={categoriesError}
          />
        )}
      </TableWrapper>
      <FormWrapper>
        <AddRoomForm
          newRoom={newRoom}
          setNewRoom={setNewRoom}
          categories={categories || []}
          categoriesLoading={categoriesLoading}
          categoriesError={categoriesError}
          onSubmit={handleAddSubmit}
          createRoomMutation={createRoomMutation}
          uploadImageMutation={uploadImageMutation}
        />
      </FormWrapper>
      <FormButton onClick={() => setIsModalOpen(true)}>+</FormButton>
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          <AddRoomForm
            newRoom={newRoom}
            setNewRoom={setNewRoom}
            categories={categories || []}
            categoriesLoading={categoriesLoading}
            categoriesError={categoriesError}
            onSubmit={handleAddSubmit}
            createRoomMutation={createRoomMutation}
            uploadImageMutation={uploadImageMutation}
          />
        </ModalContent>
      </ModalOverlay>
    </RoomContainer>
  );
};

export default RoomManagement;