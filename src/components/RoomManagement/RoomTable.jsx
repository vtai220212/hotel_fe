import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import config from '../../config';
import { TableContainer, HeaderRow, HeaderCell, Row, Cell, CellLabel, CellContent } from './styles/RoomTableStyles';
import EditRoomModal from './EditRoomModal';
import { deleteRoom, updateRoom, uploadImage } from '../../services/RoomServices';

// Styled-components cho modal xác nhận xóa
const DeleteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DeleteModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const DeleteModalTitle = styled.h3`
  color: #dc3545;
  margin-bottom: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DeleteModalText = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ConfirmButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #c82333;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a6268;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const RoomTable = ({ data, categories, categoriesLoading, categoriesError }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRoom, setEditRoom] = useState(null);
  const [newImage, setNewImage] = useState({ file: null, preview: '', description: '' });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const deleteRoomMutation = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(['rooms']);
      toast.success('Xóa phòng thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(`Lỗi khi xóa phòng: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const updateRoomMutation = useMutation({
    mutationFn: updateRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(['rooms']);
      setIsModalOpen(false);
      setEditRoom(null);
      setNewImage({ file: null, preview: '', description: '' });
      toast.success('Cập nhật phòng thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(`Lỗi khi cập nhật phòng: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: uploadImage,
  });

  const handleEdit = (room) => {
    setEditRoom({
      ...room,
      category: room.category?._id || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (roomId) => {
    setRoomToDelete(roomId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (roomToDelete) {
      deleteRoomMutation.mutate(roomToDelete);
    }
    setIsDeleteModalOpen(false);
    setRoomToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setRoomToDelete(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updatedRoom = {
      ...editRoom,
      price: parseFloat(editRoom.price),
      discount: parseFloat(editRoom.discount) || 0,
      beds: parseInt(editRoom.beds),
      guests: parseInt(editRoom.guests),
      area: parseFloat(editRoom.area),
      view: editRoom.view,
    };
    updateRoomMutation.mutate(updatedRoom);
  };

  const handleAddNewImage = async () => {
    if (!newImage.file) {
      toast.warn('Vui lòng chọn ảnh trước khi thêm.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', newImage.file);
    const uploadResult = await uploadImageMutation.mutateAsync(formData);
    const imageUrl = uploadResult.url;

    setEditRoom({
      ...editRoom,
      images: [
        ...(editRoom.images || []),
        { url: imageUrl, description: newImage.description || '' },
      ],
    });

    setNewImage({ file: null, preview: '', description: '' });
    toast.success('Thêm ảnh thành công!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const columns = [
    {
      header: 'Hình ảnh',
      accessorKey: 'images',
      cell: ({ row }) => (
        <img
          src={
            row.original.images && row.original.images[0]?.url
              ? `${config.API_URL}${row.original.images[0].url}`
              : '/placeholder.jpg'
          }
          alt="Room"
          style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
        />
      ),
    },
    {
      header: 'Mã phòng',
      accessorKey: 'code',
    },
    {
      header: 'Tên phòng',
      accessorKey: 'title',
    },
    {
      header: 'Loại phòng',
      accessorKey: 'category',
      cell: ({ row }) => row.original.category?.name || 'N/A',
    },
    {
      header: 'Số giường',
      accessorKey: 'beds',
      cell: ({ row }) => `${row.original.beds} giường`,
    },
    {
      header: 'Số khách',
      accessorKey: 'guests',
      cell: ({ row }) => `${row.original.guests} khách`,
    },
    {
      header: 'Diện tích',
      accessorKey: 'area',
      cell: ({ row }) => `${row.original.area} m²`,
    },
    {
      header: 'Quang cảnh',
      accessorKey: 'view',
      cell: ({ row }) => row.original.view || 'N/A',
    },
    {
      header: 'Giá',
      accessorKey: 'price',
      cell: ({ row }) => {
        const price = parseFloat(row.original.price) || 0;
        const discount = parseFloat(row.original.discount) || 0;
        const discountedPrice = price - (price * discount) / 100;
        return (
          <span style={{ color: '#000' }}>
            {discountedPrice.toLocaleString()} VNĐ/ngày
          </span>
        );
      },
    },
    {
      header: 'Trạng thái',
      accessorKey: 'status',
      cell: ({ row }) => (
        <span style={{ color: '#333' }}>
          {row.original.status === 'available' ? 'Còn trống' : row.original.status === 'booked' ? 'Đã đặt' : 'Bảo trì'}
        </span>
      ),
    },
    {
      header: 'Hành động',
      id: 'actions',
      cell: ({ row }) => (
        <CellContent>
          <button onClick={() => handleEdit(row.original)} style={{ marginRight: '8px' }}>
            Sửa
          </button>
          <button onClick={() => handleDelete(row.original._id)}>
            Xóa
          </button>
        </CellContent>
      ),
    },
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableContainer>
        <HeaderRow>
          {table.getHeaderGroups().map(headerGroup =>
            headerGroup.headers.map(header => (
              <HeaderCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </HeaderCell>
            ))
          )}
        </HeaderRow>
        {table.getRowModel().rows.map(row => (
          <Row key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Cell key={cell.id}>
                <CellLabel>
                  {flexRender(cell.column.columnDef.header, cell.getContext())}
                </CellLabel>
                <CellContent>
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) ||
                    flexRender(cell.column.columnDef.accessorFn || cell.getValue, cell.getContext()) ||
                    'N/A'}
                </CellContent>
              </Cell>
            ))}
          </Row>
        ))}
      </TableContainer>

      <EditRoomModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditRoom(null);
          setNewImage({ file: null, preview: '', description: '' });
        }}
        editRoom={editRoom}
        setEditRoom={setEditRoom}
        newImage={newImage}
        setNewImage={setNewImage}
        categories={categories || []}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        onSubmit={handleEditSubmit}
        onAddNewImage={handleAddNewImage}
        updateRoomMutation={updateRoomMutation}
        uploadImageMutation={uploadImageMutation}
      />

      {isDeleteModalOpen && (
        <DeleteModalOverlay>
          <DeleteModalContent>
            <DeleteModalTitle>Bạn có chắc muốn xóa phòng này?</DeleteModalTitle>
            <DeleteModalText>Hành động này không thể hoàn tác.</DeleteModalText>
            <DeleteModalButtons>
              <ConfirmButton onClick={confirmDelete}>Xóa</ConfirmButton>
              <CancelButton onClick={cancelDelete}>Hủy</CancelButton>
            </DeleteModalButtons>
          </DeleteModalContent>
        </DeleteModalOverlay>
      )}

      <ToastContainer />
    </>
  );
};

export default RoomTable;