import React from 'react';
import { HeroWrapper, HeroContent, HeroOverlay } from './style';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroOverlay /> {/* Thêm lớp phủ tối */}
      <HeroContent>
        <h1>Phòng Của Chúng Tôi</h1>
        <p>
          Mỗi sự thanh lịch tự nhiên và tinh thần hứng khởi của thiên nhiên được truyền cảm hứng từ những chi tiết nhỏ nhất, mang đến sự thoải mái và cảm giác thư giãn tuyệt đối cho bạn, giúp bạn cảm nhận được sự yên bình và niềm vui trong từng khoảnh khắc.
        </p>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;