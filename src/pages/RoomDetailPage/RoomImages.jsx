import React from 'react';
import { ImageContainer, Image } from './styles/RoomImagesStyles';

const RoomImages = ({ images }) => {
  if (!images || images.length === 0) {
    return <ImageContainer>Không có hình ảnh</ImageContainer>;
  }

  return (
    <ImageContainer>
      {images.map((img, index) => (
        <Image
          key={index}
          src={`http://localhost:3001${img.url}`}
          alt={img.description || `Hình ảnh ${index + 1}`}
        />
      ))}
    </ImageContainer>
  );
};

export default RoomImages;