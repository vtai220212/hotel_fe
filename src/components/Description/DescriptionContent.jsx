import React from 'react';
import { DescriptionContentWrapper, DescriptionTitle, DescriptionText, DescriptionButton } from './style';

const DescriptionContent = () => {
  return (
    <DescriptionContentWrapper>
      <DescriptionTitle>
        Khách sạn của chúng tôi nằm ở trung tâm của New Forrest.
      </DescriptionTitle>
      <DescriptionText>
        Một lối sống nhiệm sao được bao quanh bởi khu rừng.
      </DescriptionText>
      <DescriptionButton>
        Xem thêm <span>→</span>
      </DescriptionButton>
    </DescriptionContentWrapper>
  );
};

export default DescriptionContent;