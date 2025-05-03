import React from 'react';
import { HeroContainer, HeroTitle, HeroDescription, HeroBackground } from './styles/RoomDetailHeroStyles';
import roomDetailHero from '../../assets/banner.jpg';

const RoomDetailHero = () => {
  return (
    <HeroContainer>
      <HeroBackground src={roomDetailHero} alt="Hero Background" />
      <HeroTitle>CHI TIẾT PHÒNG</HeroTitle>
      <HeroDescription>
        Mỗi sự thanh lịch từ thiên vị thành hình khối của thiên nhiên được truyền cảm hứng từ những chi tiết nhỏ nhất, mang đến sự thoải mái và cảm giác thư giãn cho bạn, bạn cảm nhận được sự bình yên và niềm vui trong từng khoảnh khắc.
      </HeroDescription>
    </HeroContainer>
  );
};

export default RoomDetailHero;