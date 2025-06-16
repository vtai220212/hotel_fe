import React from 'react';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, Form, Input, Select, SubmitButton, Label, CancelButton } from './styles/EditOrderModalStyles';
import dayjs from 'dayjs';

const EditOrderModal = ({ isOpen, onClose, editOrder, setEditOrder, onSubmit, updateOrderMutation }) => {
  if (!isOpen || !editOrder) return null;

  console.log('EditOrderModal - editOrder:', editOrder);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditOrder({ ...editOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editOrder.userId || !editOrder.roomId) {
      alert('User ID và Room ID không được để trống!');
      return;
    }

    // Chuyển đổi định dạng ngày từ YYYY-MM-DD sang DD-MM-YYYY
    let checkInFormatted = editOrder.checkIn;
    let checkOutFormatted = editOrder.checkOut;
    if (editOrder.checkIn) {
      const checkInMoment = dayjs(editOrder.checkIn, 'YYYY-MM-DD', true);
      if (!checkInMoment.isValid()) {
        alert('Ngày nhận phòng không hợp lệ!');
        return;
      }
      checkInFormatted = checkInMoment.format('DD-MM-YYYY');
    }
    if (editOrder.checkOut) {
      const checkOutMoment = dayjs(editOrder.checkOut, 'YYYY-MM-DD', true);
      if (!checkOutMoment.isValid()) {
        alert('Ngày trả phòng không hợp lệ!');
        return;
      }
      checkOutFormatted = checkOutMoment.format('DD-MM-YYYY');
    }

    const checkInDate = dayjs(checkInFormatted, 'DD-MM-YYYY');
    const checkOutDate = dayjs(checkOutFormatted, 'DD-MM-YYYY');
    if (checkInDate.isSame(checkOutDate) || checkInDate.isAfter(checkOutDate)) {
      alert('Ngày nhận phòng phải trước ngày trả phòng!');
      return;
    }

    // Cập nhật editOrder với định dạng ngày mới trước khi submit
    const updatedEditOrder = {
      ...editOrder,
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
    };
    setEditOrder(updatedEditOrder);
    onSubmit(e); // Gọi onSubmit với dữ liệu đã được định dạng
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Chỉnh sửa đơn hàng</ModalTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>User ID</Label>
            <Input
              type="text"
              name="userId"
              placeholder="Nhập ID người dùng"
              value={editOrder.userId || ''}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>
          <div>
            <Label>Ngày nhận phòng</Label>
            <Input
              type="date"
              name="checkIn"
              value={editOrder.checkIn || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Ngày trả phòng</Label>
            <Input
              type="date"
              name="checkOut"
              value={editOrder.checkOut || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Số khách</Label>
            <Input
              type="number"
              name="guests"
              placeholder="Nhập số khách"
              value={editOrder.guests || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Tổng giá (VNĐ)</Label>
            <Input
              type="number"
              name="totalPrice"
              placeholder="Nhập tổng giá"
              value={editOrder.totalPrice || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Tên khách hàng</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nhập tên khách hàng"
              value={editOrder.name || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Nhập email"
              value={editOrder.email || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Số điện thoại</Label>
            <Input
              type="text"
              name="phone"
              placeholder="Nhập số điện thoại"
              value={editOrder.phone || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Địa chỉ</Label>
            <Input
              type="text"
              name="address"
              placeholder="Nhập địa chỉ"
              value={editOrder.address || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Trạng thái</Label>
            <Select name="status" value={editOrder.status || 'pending'} onChange={handleInputChange}>
              <option value="pending">Chờ xử lý</option>
              <option value="confirmed">Đã xác nhận</option>
              <option value="cancelled">Đã hủy</option>
            </Select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <SubmitButton type="submit" disabled={updateOrderMutation.isLoading}>
              {updateOrderMutation.isLoading ? 'Đang cập nhật...' : 'Cập nhật đơn hàng'}
            </SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              Đóng
            </CancelButton>
          </div>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditOrderModal;