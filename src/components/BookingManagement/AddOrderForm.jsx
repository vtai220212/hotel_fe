import React from 'react';
import { Form, FormGroup, Input, Select, Button, Label, ErrorMessage } from './styles/AddOrderFormStyles';

const AddOrderForm = ({ newOrder, setNewOrder, onSubmit, createOrderMutation }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const isOffline = newOrder.bookingType === 'offline';

  return (
    <Form onSubmit={onSubmit}>
      <h2>Thêm đơn hàng mới</h2>

      {createOrderMutation.isError && (
        <ErrorMessage>
          {createOrderMutation.error?.response?.data?.message || 'Có lỗi xảy ra khi thêm đơn hàng'}
        </ErrorMessage>
      )}

      <FormGroup>
        <Label>Loại đặt phòng</Label>
        <Select name="bookingType" value={newOrder.bookingType} onChange={handleInputChange}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>User ID {isOffline ? '(Tùy chọn)' : ''}</Label>
        <Input
          type="text"
          name="userId"
          placeholder="Nhập ID người dùng"
          value={newOrder.userId}
          onChange={handleInputChange}
          required={!isOffline}
        />
      </FormGroup>

      <FormGroup>
        <Label>Room ID {isOffline ? '(Tùy chọn)' : ''}</Label>
        <Input
          type="text"
          name="roomId"
          placeholder="Nhập ID phòng"
          value={newOrder.roomId}
          onChange={handleInputChange}
          required={!isOffline}
        />
      </FormGroup>

      <FormGroup>
        <Label>Tên phòng</Label>
        <Input
          type="text"
          name="roomTitle"
          placeholder="Nhập tên phòng"
          value={newOrder.roomTitle}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Ngày nhận phòng</Label>
        <Input
          type="date"
          name="checkIn"
          value={newOrder.checkIn}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Ngày trả phòng</Label>
        <Input
          type="date"
          name="checkOut"
          value={newOrder.checkOut}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Số khách</Label>
        <Input
          type="number"
          name="guests"
          placeholder="Nhập số khách"
          value={newOrder.guests}
          onChange={handleInputChange}
          required
        />
      </FormGroup>



      <FormGroup>
        <Label>Tổng giá (VNĐ)</Label>
        <Input
          type="number"
          name="totalPrice"
          placeholder="Nhập tổng giá"
          value={newOrder.totalPrice}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Tên khách hàng</Label>
        <Input
          type="text"
          name="name"
          placeholder="Nhập tên khách hàng"
          value={newOrder.name}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={newOrder.email}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Số điện thoại</Label>
        <Input
          type="text"
          name="phone"
          placeholder="Nhập số điện thoại"
          value={newOrder.phone}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Địa chỉ</Label>
        <Input
          type="text"
          name="address"
          placeholder="Nhập địa chỉ"
          value={newOrder.address}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Trạng thái</Label>
        <Select name="status" value={newOrder.status} onChange={handleInputChange}>
          <option value="pending">Chờ xử lý</option>
          <option value="confirmed">Đã xác nhận</option>
          <option value="cancelled">Đã hủy</option>
          <option value="completed">Hoàn thành</option>
        </Select>
      </FormGroup>

      <Button type="submit" disabled={createOrderMutation.isLoading}>
        {createOrderMutation.isLoading ? 'Đang thêm...' : 'Thêm đơn hàng'}
      </Button>
      <Button type="button" secondary>Lưu nháp</Button>
    </Form>
  );
};

export default AddOrderForm;