import React from 'react';
import { Form, Input, Select, FileInput, ImagePreview, Button, Label } from './styles/AddRoomFormStyles';

const AddRoomForm = ({
  newRoom,
  setNewRoom,
  categories,
  categoriesLoading,
  categoriesError,
  onSubmit,
  createRoomMutation,
  uploadImageMutation,
}) => {
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      const file = files[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setNewRoom({ ...newRoom, imageFile: file, imagePreview: previewUrl });
      }
    } else {
      setNewRoom({ ...newRoom, [name]: value });
    }
  };

  const calculateDiscountedPrice = () => {
    const price = parseFloat(newRoom.price) || 0;
    const discount = parseFloat(newRoom.discount) || 0;
    const discountAmount = (price * discount) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice >= 0 ? discountedPrice : 0;
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>
        Thêm phòng mới
      </h2>

      <Label>Loại phòng</Label>
      {categoriesLoading ? (
        <div style={{ color: '#000' }}>Đang tải danh mục...</div>
      ) : categoriesError ? (
        <div style={{ color: '#ff4d4d' }}>Lỗi: {categoriesError.message}</div>
      ) : (
        <Select
          name="category"
          value={newRoom.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Chọn danh mục</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </Select>
      )}

      <Label>Mã phòng</Label>
      <Input
        type="text"
        name="code"
        placeholder="Nhập mã phòng (ví dụ: #B17)"
        value={newRoom.code}
        onChange={handleInputChange}
        required
      />

      <Label>Tên phòng</Label>
      <Input
        type="text"
        name="title"
        placeholder="Nhập tên phòng (ví dụ: Luxury Queen Bed)"
        value={newRoom.title}
        onChange={handleInputChange}
        required
      />

      <Label>Giá</Label>
      <Input
        type="number"
        name="price"
        placeholder="Nhập giá phòng (VNĐ)"
        value={newRoom.price}
        onChange={handleInputChange}
        required
      />

      <Label>Giảm giá (%)</Label>
      <Input
        type="number"
        name="discount"
        placeholder="Nhập phần trăm giảm giá"
        value={newRoom.discount}
        onChange={handleInputChange}
      />
      {newRoom.price && newRoom.discount > 0 && (
        <div style={{ color: '#000', fontSize: '14px', marginTop: '5px' }}>
          Giá sau khi giảm: {calculateDiscountedPrice().toLocaleString()} VNĐ
        </div>
      )}

      <Label>Số giường</Label>
      <Input
        type="number"
        name="beds"
        placeholder="Nhập số giường"
        value={newRoom.beds}
        onChange={handleInputChange}
        required
      />

      <Label>Số khách</Label>
      <Input
        type="number"
        name="guests"
        placeholder="Nhập số khách tối đa"
        value={newRoom.guests}
        onChange={handleInputChange}
        required
      />

      <Label>Trạng thái</Label>
      <Select name="status" value={newRoom.status} onChange={handleInputChange}>
        <option value="available">Còn trống</option>
        <option value="booked">Đã đặt</option>
        <option value="maintenance">Đang bảo trì</option>
      </Select>

      <Label>Tải ảnh phòng</Label>
      <FileInput
        type="file"
        name="imageFile"
        accept="image/*"
        onChange={handleInputChange}
      />
      {newRoom.imagePreview && (
        <ImagePreview src={newRoom.imagePreview} alt="Preview" />
      )}

      <Button
        type="submit"
        disabled={createRoomMutation.isLoading || uploadImageMutation.isLoading}
      >
        {(createRoomMutation.isLoading || uploadImageMutation.isLoading) ? 'Đang thêm...' : 'Thêm phòng'}
      </Button>
      <Button type="button" secondary>Lưu nháp</Button>
    </Form>
  );
};

export default AddRoomForm;