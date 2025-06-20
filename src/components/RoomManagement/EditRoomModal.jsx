import React from 'react';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, Form, Input, FileInput, Select, SubmitButton, ImageList, ImageItem, ImagePreview, DeleteImageButton } from './styles/EditRoomModalStyles';
import config from '../../config';

const EditRoomModal = ({
  isOpen,
  onClose,
  editRoom,
  setEditRoom,
  newImage,
  setNewImage,
  categories,
  categoriesLoading,
  categoriesError,
  onSubmit,
  onAddNewImage,
  updateRoomMutation,
  uploadImageMutation,
}) => {
  if (!isOpen || !editRoom) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRoom({ ...editRoom, [name]: value });
  };

  const handleNewImageChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      const file = files[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setNewImage({ ...newImage, file, preview: previewUrl });
      }
    } else {
      setNewImage({ ...newImage, [name]: value });
    }
  };

  const handleDeleteImage = (index) => {
    setEditRoom({
      ...editRoom,
      images: editRoom.images.filter((_, i) => i !== index),
    });
  };

  const calculateDiscountedPrice = () => {
    const price = parseFloat(editRoom.price) || 0;
    const discount = parseFloat(editRoom.discount) || 0;
    const discountAmount = (price * discount) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice >= 0 ? discountedPrice : 0;
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModalTitle>Chỉnh sửa phòng</ModalTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={onSubmit}>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Mã phòng
            </label>
            <Input
              type="text"
              name="code"
              placeholder="Nhập mã phòng"
              value={editRoom.code}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Tên phòng
            </label>
            <Input
              type="text"
              name="title"
              placeholder="Nhập tên phòng"
              value={editRoom.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Giá (VNĐ)
            </label>
            <Input
              type="number"
              name="price"
              placeholder="Nhập giá phòng"
              value={editRoom.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Giảm giá (%)
            </label>
            <Input
              type="number"
              name="discount"
              placeholder="Nhập phần trăm giảm giá"
              value={editRoom.discount}
              onChange={handleInputChange}
            />
            {editRoom.price && editRoom.discount > 0 && (
              <div style={{ color: '#333', fontSize: '15px', marginTop: '5px' }}>
                Giá sau khi giảm: {calculateDiscountedPrice().toLocaleString()} VNĐ
              </div>
            )}
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Số giường
            </label>
            <Input
              type="number"
              name="beds"
              placeholder="Nhập số giường"
              value={editRoom.beds}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Số khách
            </label>
            <Input
              type="number"
              name="guests"
              placeholder="Nhập số khách tối đa"
              value={editRoom.guests}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Diện tích phòng (m²)
            </label>
            <Input
              type="number"
              name="area"
              placeholder="Nhập diện tích phòng (m²)"
              value={editRoom.area}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Quang cảnh phòng
            </label>
            <Input
              type="text"
              name="view"
              placeholder="Nhập quang cảnh phòng (ví dụ: Hướng Thành Phố)"
              value={editRoom.view}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Danh mục
            </label>
            {categoriesLoading ? (
              <div style={{ color: '#333', fontSize: '15px' }}>Đang tải danh mục...</div>
            ) : categoriesError ? (
              <div style={{ color: '#dc3545', fontSize: '15px' }}>Lỗi: {categoriesError.message}</div>
            ) : (
              <Select
                name="category"
                value={editRoom.category}
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
          </div>
          <div>
            <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
              Trạng thái
            </label>
            <Select name="status" value={editRoom.status} onChange={handleInputChange}>
              <option value="available">Còn trống</option>
              <option value="booked">Đã đặt</option>
              <option value="maintenance">Đang bảo trì</option>
            </Select>
          </div>
          <div>
            <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '18px', fontWeight: 600 }}>
              Danh sách ảnh
            </h3>
            {editRoom.images && editRoom.images.length > 0 ? (
              <ImageList>
                {editRoom.images.map((image, index) => (
                  <ImageItem key={index}>
                    <ImagePreview src={`${config.API_URL}${image.url}`} alt={image.description || 'Room Image'} />
                    <span style={{ color: '#333', flex: 1, fontSize: '15px' }}>
                      {image.description || 'Không có mô tả'}
                    </span>
                    <DeleteImageButton type="button" onClick={() => handleDeleteImage(index)}>
                      Xóa
                    </DeleteImageButton>
                  </ImageItem>
                ))}
              </ImageList>
            ) : (
              <div style={{ color: '#333', fontSize: '15px' }}>Chưa có ảnh</div>
            )}
            <h4 style={{ color: '#333', marginTop: '20px', marginBottom: '10px', fontSize: '16px', fontWeight: 600 }}>
              Thêm ảnh mới
            </h4>
            <div>
              <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
                Chọn ảnh
              </label>
              <FileInput
                type="file"
                name="file"
                accept="image/*"
                onChange={handleNewImageChange}
              />
            </div>
            {newImage.preview && (
              <div style={{ marginTop: '10px' }}>
                <ImagePreview src={newImage.preview} alt="Preview" />
              </div>
            )}
            <div>
              <label style={{ color: '#333', fontSize: '15px', marginBottom: '5px', display: 'block', fontWeight: 500 }}>
                Mô tả ảnh
              </label>
              <Input
                type="text"
                name="description"
                placeholder="Nhập mô tả ảnh (tùy chọn)"
                value={newImage.description}
                onChange={handleNewImageChange}
              />
            </div>
            <SubmitButton type="button" onClick={onAddNewImage} disabled={uploadImageMutation.isLoading}>
              {uploadImageMutation.isLoading ? 'Đang upload...' : 'Thêm ảnh vào danh sách'}
            </SubmitButton>
          </div>
          <SubmitButton type="submit" disabled={updateRoomMutation.isLoading}>
            {updateRoomMutation.isLoading ? 'Đang cập nhật...' : 'Cập nhật phòng'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditRoomModal;