import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import OrderTable from './OrderTable';
import AddOrderForm from './AddOrderForm';
import { getAllBookings, createBooking } from '../../services/bookingService';
import { OrderContainer, TableWrapper, FormWrapper, FormButton, ModalOverlay, ModalContent, CloseButton } from './styles/OrderManagementStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';

// Lấy thông tin người dùng từ localStorage
const currentUser = JSON.parse(localStorage.getItem('user')) || { role: 'staff' }; // Giả định mặc định là staff nếu không có

const OrderManagement = () => {
  const queryClient = useQueryClient();

  const [newOrder, setNewOrder] = useState({
    userId: '',
    roomId: '',
    roomTitle: '',
    bookingType: 'online',
    checkIn: '',
    checkOut: '',
    guests: '',
    children: '',
    totalPrice: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    status: 'pending',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: orders, isLoading: ordersLoading, error: ordersError } = useQuery({
    queryKey: ['allBookings'],
    queryFn: getAllBookings,
  });

  const createOrderMutation = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(['allBookings']);
      setNewOrder({
        userId: '',
        roomId: '',
        roomTitle: '',
        bookingType: 'online',
        checkIn: '',
        checkOut: '',
        guests: '',
        children: '',
        totalPrice: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        status: 'pending',
      });
      toast.success('Thêm đơn hàng thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setIsModalOpen(false); // Đóng modal sau khi thành công
    },
    onError: (error) => {
      console.error('Create booking error:', error);
      toast.error(`Lỗi khi thêm đơn hàng: ${error.response?.data?.message || error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    let checkInFormatted = newOrder.checkIn;
    let checkOutFormatted = newOrder.checkOut;

    if (newOrder.checkIn) {
      const checkInMoment = dayjs(newOrder.checkIn, 'YYYY-MM-DD', true);
      if (!checkInMoment.isValid()) {
        toast.error('Định dạng ngày nhận phòng không hợp lệ!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }
      checkInFormatted = checkInMoment.format('DD-MM-YYYY');
    }

    if (newOrder.checkOut) {
      const checkOutMoment = dayjs(newOrder.checkOut, 'YYYY-MM-DD', true);
      if (!checkOutMoment.isValid()) {
        toast.error('Định dạng ngày trả phòng không hợp lệ!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }
      checkOutFormatted = checkOutMoment.format('DD-MM-YYYY');
    }

    const checkInDate = dayjs(checkInFormatted, 'DD-MM-YYYY');
    const checkOutDate = dayjs(checkOutFormatted, 'DD-MM-YYYY');
    if (checkInDate.isSame(checkOutDate) || checkInDate.isAfter(checkOutDate)) {
      toast.error('Ngày nhận phòng phải trước ngày trả phòng!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    const orderData = {
      userId: newOrder.bookingType === 'online' ? newOrder.userId : undefined,
      roomId: newOrder.bookingType === 'online' ? newOrder.roomId : undefined,
      roomTitle: newOrder.roomTitle,
      bookingType: newOrder.bookingType,
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
      guests: parseInt(newOrder.guests) || 0,
      children: parseInt(newOrder.children) || 0,
      totalPrice: parseFloat(newOrder.totalPrice) || 0,
      name: newOrder.name,
      email: newOrder.email,
      phone: newOrder.phone,
      address: newOrder.address,
      status: newOrder.status,
    };

    createOrderMutation.mutate(orderData);
  };

  return (
    <OrderContainer>
      <TableWrapper>
        {ordersLoading ? (
          <div>Đang tải đơn hàng...</div>
        ) : ordersError ? (
          <div>Lỗi: {ordersError.message || 'Không thể tải danh sách đơn hàng'}</div>
        ) : !orders || orders.length === 0 ? (
          <div>Không có đơn hàng nào</div>
        ) : (
          <OrderTable data={orders} currentUser={currentUser} />
        )}
      </TableWrapper>
      <FormWrapper>
        <AddOrderForm
          newOrder={newOrder}
          setNewOrder={setNewOrder}
          onSubmit={handleAddSubmit}
          createOrderMutation={createOrderMutation}
        />
      </FormWrapper>
      <FormButton onClick={() => setIsModalOpen(true)}>+</FormButton>
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          <AddOrderForm
            newOrder={newOrder}
            setNewOrder={setNewOrder}
            onSubmit={handleAddSubmit}
            createOrderMutation={createOrderMutation}
          />
        </ModalContent>
      </ModalOverlay>
    </OrderContainer>
  );
};

export default OrderManagement;