import React from 'react';
import { HeroWrapper, HeroContent, Title, Subtitle } from './style';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <Title>Liên Hệ Với Chúng Tôi</Title>
        <Subtitle>
          Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy gửi thông tin liên hệ để nhận phản hồi sớm nhất!
        </Subtitle>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;