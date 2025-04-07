import React from 'react';
import { HeroWrapper, HeroContent, HeroOverlay } from './style';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroOverlay /> {/* Lớp phủ tối để tăng độ tương phản */}
      <HeroContent>
        <h1>Các Dịch Vụ Của Chúng Tôi</h1>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;