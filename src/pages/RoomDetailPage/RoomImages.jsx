import React from 'react';
import { Carousel } from 'antd';
import { ImageContainer, SlideImage } from './styles/RoomImagesStyles';

const RoomImages = ({ images }) => {
  if (!images || images.length === 0) {
    return <ImageContainer>Không có hình ảnh</ImageContainer>;
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 4 ảnh trên PC
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 ảnh trên tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 ảnh trên mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ImageContainer>
      <Carousel {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <SlideImage
              src={`http://localhost:3001${img.url}`}
              alt={img.description || `Hình ảnh ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </ImageContainer>
  );
};

export default RoomImages;