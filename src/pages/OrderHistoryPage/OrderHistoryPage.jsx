import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import {
  PageContainer,
  Title,
  LoadingMessage,
  ErrorMessage,
  NoOrdersMessage,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  LoginPrompt,
  LoginButton,
  ModalOverlay,
  Modal,
  ModalTitle,
  DetailTable,
  DetailRow,
  DetailCell,
  CloseButton,
  ActionButton,
} from './styles/OrderHistoryPageStyles';
import { cancelBooking } from '../../services/bookingService';

const OrderHistoryPage = () => {
  const { token, userId, login, logout } = useAuth();
  const queryClient = useQueryClient();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data: orders, isLoading, error } = useQuery({
    queryKey: ['userBookings', userId],
    queryFn: () => import('../../services/bookingService').then(module => module.getBookingsByUser()),
    enabled: !!token && !!userId,
    onError: (error) => {
      let errorMessage = 'Lỗi khi tải lịch sử đơn hàng';
      if (error.response?.status === 401) {
        errorMessage = 'Vui lòng đăng nhập để xem lịch sử đơn hàng.';
      } else if (error.response?.status === 403) {
        errorMessage = 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.';
      } else if (error.response?.status === 400) {
        errorMessage = error.response.data.message || 'Yêu cầu không hợp lệ.';
      }
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  const mutation = useMutation({
    mutationFn: (orderId) => cancelBooking(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries(['userBookings', userId]);
      toast.success('Hủy đơn hàng thành công!', { position: 'top-right', autoClose: 3000 });
    },
    onError: (error) => {
      let errorMessage = 'Hủy đơn hàng thất bại';
      if (error.response?.status === 403) {
        errorMessage = 'Bạn không có quyền hủy đơn hàng này.';
      } else if (error.response?.status === 400) {
        errorMessage = error.response.data.message || 'Yêu cầu không hợp lệ.';
      }
      toast.error(errorMessage, { position: 'top-right', autoClose: 3000 });
    },
  });

  const handleCancelOrder = (orderId) => {
    if (window.confirm('Bạn có chắc muốn hủy đơn hàng này?')) {
      mutation.mutate(orderId);
    }
  };

  const closeModal = () => setSelectedOrder(null);

  if (!token) {
    return (
      <PageContainer>
        <LoginPrompt>Vui lòng đăng nhập để xem lịch sử đơn hàng.</LoginPrompt>
        <LoginButton onClick={() => window.location.href = '/login'}>Đăng nhập</LoginButton>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <div>
        <Title>Lịch sử đơn hàng</Title>
        {isLoading ? (
          <LoadingMessage>Đang tải lịch sử đơn hàng...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>
            Lỗi: {error.response?.data?.message || error.message || 'Không thể tải lịch sử đơn hàng'}
          </ErrorMessage>
        ) : !orders || orders.length === 0 ? (
          <NoOrdersMessage>Không có đơn hàng nào trong lịch sử.</NoOrdersMessage>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Mã đơn hàng</TableHeaderCell>
                  <TableHeaderCell>Phòng</TableHeaderCell>
                  <TableHeaderCell>Ngày check-in</TableHeaderCell>
                  <TableHeaderCell>Ngày check-out</TableHeaderCell>
                  <TableHeaderCell>Tổng giá</TableHeaderCell>
                  <TableHeaderCell>Trạng thái</TableHeaderCell>
                  <TableHeaderCell>Hành động</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order._id}</TableCell>
                    <TableCell>{order.roomTitle || 'N/A'}</TableCell>
                    <TableCell>{order.checkIn || 'N/A'}</TableCell>
                    <TableCell>{order.checkOut || 'N/A'}</TableCell>
                    <TableCell>{order.totalPrice ? `${order.totalPrice.toLocaleString()} VND` : 'N/A'}</TableCell>
                    <TableCell>{order.status || 'Chưa xác định'}</TableCell>
                    <TableCell>
                      <ActionButton onClick={() => setSelectedOrder(order)}>Xem chi tiết</ActionButton>
                      {order.status === 'Đang chờ xác nhận' && (
                        <ActionButton
                          onClick={() => handleCancelOrder(order._id)}
                          style={{ backgroundColor: '#FF6B6B', marginLeft: '10px' }}
                          disabled={mutation.isLoading}
                        >
                          Hủy đơn hàng
                        </ActionButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {selectedOrder && (
              <ModalOverlay onClick={closeModal}>
                <Modal onClick={(e) => e.stopPropagation()}>
                  <ModalTitle>Chi tiết đơn hàng</ModalTitle>
                  <DetailTable>
                    <tbody>
                      <DetailRow>
                        <DetailCell>Mã đơn hàng:</DetailCell>
                        <DetailCell>{selectedOrder._id}</DetailCell>
                      </DetailRow>
                      <DetailRow>
                        <DetailCell>Phòng:</DetailCell>
                        <DetailCell>{selectedOrder.roomTitle || 'N/A'}</DetailCell>
                      </DetailRow>
                      <DetailRow>
                        <DetailCell>Ngày check-in:</DetailCell>
                        <DetailCell>{selectedOrder.checkIn || 'N/A'}</DetailCell>
                      </DetailRow>
                      <DetailRow>
                        <DetailCell>Ngày check-out:</DetailCell>
                        <DetailCell>{selectedOrder.checkOut || 'N/A'}</DetailCell>
                      </DetailRow>
                      <DetailRow>
                        <DetailCell>Tổng giá:</DetailCell>
                        <DetailCell>{selectedOrder.totalPrice ? `${selectedOrder.totalPrice.toLocaleString()} VND` : 'N/A'}</DetailCell>
                      </DetailRow>
                      <DetailRow>
                        <DetailCell>Trạng thái:</DetailCell>
                        <DetailCell>{selectedOrder.status || 'Chưa xác định'}</DetailCell>
                      </DetailRow>
                    </tbody>
                  </DetailTable>
                  <CloseButton onClick={closeModal}>Đóng</CloseButton>
                </Modal>
              </ModalOverlay>
            )}
          </>
        )}
      </div>
    </PageContainer>
  );
};

export default OrderHistoryPage;