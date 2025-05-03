import React from 'react';
import config from '../../config';
import { ImageList, ImageItem, ImagePreview, DeleteImageButton } from './styles/RoomImageListStyles';

const API_URL = config.API_URL;

const RoomImageList = ({ images, onDelete }) => {
  return (
    <div>
      <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Danh sách ảnh</h3>
      {images && images.length > 0 ? (
        <ImageList>
          {images.map((image, index) => (
            <ImageItem key={index}>
              <ImagePreview src={`${API_URL}${image.url}`} alt={image.description || 'Room Image'} />
              <span style={{ color: '#e0e0e0' }}>{image.description || 'Không có mô tả'}</span>
              <DeleteImageButton type="button" onClick={() => onDelete(index)}>
                Xóa
              </DeleteImageButton>
            </ImageItem>
          ))}
        </ImageList>
      ) : (
        <div style={{ color: '#e0e0e0' }}>Chưa có ảnh</div>
      )}
    </div>
  );
};

export default RoomImageList;