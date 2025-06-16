import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TableContainer, HeaderRow, HeaderCell, Row, Cell, CellLabel, CellContent } from './styles/OrderTableStyles';
import EditOrderModal from './EditOrderModal';
import { updateBooking, getBookingById, deleteBooking } from '../../services/bookingService';
import dayjs from 'dayjs';
import styled from 'styled-components';

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

const OrderTable = ({ data, currentUser }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  const updateOrderMutation = useMutation({
    mutationFn: ({ bookingId, updateData }) => updateBooking(bookingId, updateData),
    onSuccess: () => {
      queryClient.invalidateQueries(['allBookings']);
      setIsModalOpen(false);
      setEditOrder(null);
      toast.success('Cập nhật đơn hàng thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      console.error('Update error:', error.response?.data || error.message);
      toast.error(`Lỗi khi cập nhật đơn hàng: ${error.response?.data?.message || error.message || 'Không xác định'}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const deleteOrderMutation = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(['allBookings']);
      setIsDeleteModalOpen(false);
      setOrderToDelete(null);
      toast.success('Xóa đơn hàng thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      console.error('Delete error:', error.response?.data || error.message);
      toast.error(`Lỗi khi xóa đơn hàng: ${error.response?.data?.message || error.message || 'Không xác định'}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const handleEdit = async (order) => {
    try {
      console.log('Fetching booking details for ID:', order._id);
      const detailedOrder = await getBookingById(order._id);
      console.log('Detailed order:', detailedOrder);

      // Chuyển đổi định dạng ngày từ DD-MM-YYYY sang YYYY-MM-DD cho input type="date"
      const formattedOrder = {
        ...detailedOrder,
        checkIn: detailedOrder.checkIn ? dayjs(detailedOrder.checkIn, 'DD-MM-YYYY').format('YYYY-MM-DD') : '',
        checkOut: detailedOrder.checkOut ? dayjs(detailedOrder.checkOut, 'DD-MM-YYYY').format('YYYY-MM-DD') : '',
      };
      setEditOrder(formattedOrder);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error in handleEdit:', error);
      toast.error(`Lỗi khi tải thông tin đơn hàng: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const handleDelete = (orderId) => {
    setOrderToDelete(orderId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (orderToDelete) {
      deleteOrderMutation.mutate(orderToDelete);
    }
    setIsDeleteModalOpen(false);
    setOrderToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setOrderToDelete(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting updated order:', editOrder);

    let checkInFormatted, checkOutFormatted;
    if (editOrder.checkIn) {
      const checkInMoment = dayjs(editOrder.checkIn, 'YYYY-MM-DD', true);
      if (!checkInMoment.isValid()) {
        toast.error('Định dạng ngày nhận phòng không hợp lệ (YYYY-MM-DD)', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }
      checkInFormatted = checkInMoment.format('DD-MM-YYYY');
    }
    if (editOrder.checkOut) {
      const checkOutMoment = dayjs(editOrder.checkOut, 'YYYY-MM-DD', true);
      if (!checkOutMoment.isValid()) {
        toast.error('Định dạng ngày trả phòng không hợp lệ (YYYY-MM-DD)', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }
      checkOutFormatted = checkOutMoment.format('DD-MM-YYYY');
    }

    const updatedOrder = {
      userId: editOrder.userId,
      roomId: editOrder.roomId,
      roomTitle: editOrder.roomTitle || '',
      bookingType: editOrder.bookingType || 'online',
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
      guests: parseInt(editOrder.guests, 10) || 0,
      children: parseInt(editOrder.children, 10) || 0,
      totalPrice: parseFloat(editOrder.totalPrice) || 0,
      status: editOrder.status === 'pending' ? 'Đang chờ xác nhận' :
        editOrder.status === 'confirmed' ? 'Đã xác nhận' :
          editOrder.status === 'cancelled' ? 'Đã hủy' : 'Đang chờ xác nhận',
      name: editOrder.name || '',
      email: editOrder.email || '',
      phone: editOrder.phone || '',
      address: editOrder.address || '',
    };

    delete updatedOrder._id;
    delete updatedOrder.createdAt;
    delete updatedOrder.updatedAt;
    delete updatedOrder.__v;

    console.log('Data sent to API:', updatedOrder);
    updateOrderMutation.mutate({ bookingId: editOrder._id, updateData: updatedOrder });
  };

  const columns = [
    {
      header: 'Mã đơn hàng',
      accessorKey: '_id',
      cell: ({ row }) => <CellContent>{row.original._id}</CellContent>,
    },
    {
      header: 'Loại đặt phòng',
      accessorKey: 'bookingType',
      cell: ({ row }) => (
        <CellContent>{row.original.bookingType === 'online' ? 'Online' : 'Offline'}</CellContent>
      ),
    },
    {
      header: 'Tên phòng',
      accessorKey: 'roomTitle',
      cell: ({ row }) => <CellContent>{row.original.roomTitle || 'N/A'}</CellContent>,
    },
    {
      header: 'Tên khách hàng',
      accessorKey: 'name',
      cell: ({ row }) => <CellContent>{row.original.name || 'N/A'}</CellContent>,
    },
    {
      header: 'Email',
      accessorKey: 'email',
      cell: ({ row }) => <CellContent>{row.original.email || 'N/A'}</CellContent>,
    },
    {
      header: 'Số điện thoại',
      accessorKey: 'phone',
      cell: ({ row }) => <CellContent>{row.original.phone || 'N/A'}</CellContent>,
    },
    {
      header: 'Ngày nhận phòng',
      accessorKey: 'checkIn',
      cell: ({ row }) => <CellContent>{row.original.checkIn || 'N/A'}</CellContent>,
    },
    {
      header: 'Ngày trả phòng',
      accessorKey: 'checkOut',
      cell: ({ row }) => <CellContent>{row.original.checkOut || 'N/A'}</CellContent>,
    },
    {
      header: 'Số khách',
      accessorKey: 'guests',
      cell: ({ row }) => <CellContent>{row.original.guests} khách</CellContent>,
    },
    {
      header: 'Tổng giá',
      accessorKey: 'totalPrice',
      cell: ({ row }) => <CellContent>{row.original.totalPrice.toLocaleString()} VNĐ</CellContent>,
    },
    {
      header: 'Trạng thái',
      accessorKey: 'status',
      cell: ({ row }) => (
        <CellContent>
          {row.original.status === 'Đã xác nhận' ? 'Đã xác nhận' :
            row.original.status === 'Đang chờ xác nhận' ? 'Chờ xử lý' :
              row.original.status === 'Đã hoàn thành' ? 'Hoàn thành' : 'Đã hủy'}
        </CellContent>
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
          {currentUser?.role === 'admin' && (
            <button onClick={() => handleDelete(row.original._id)} style={{ backgroundColor: '#FF6666', color: '#FFFFFF' }}>
              Xóa
            </button>
          )}
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
                {flexRender(cell.column.columnDef.cell, cell.getContext()) || (
                  <CellContent>{cell.getValue() || 'N/A'}</CellContent>
                )}
              </Cell>
            ))}
          </Row>
        ))}
      </TableContainer>

      <EditOrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditOrder(null);
        }}
        editOrder={editOrder}
        setEditOrder={setEditOrder}
        onSubmit={handleEditSubmit}
        updateOrderMutation={updateOrderMutation}
      />

      {isDeleteModalOpen && (
        <DeleteModalOverlay>
          <DeleteModalContent>
            <DeleteModalTitle>Bạn có chắc muốn xóa đơn hàng này?</DeleteModalTitle>
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

export default OrderTable;