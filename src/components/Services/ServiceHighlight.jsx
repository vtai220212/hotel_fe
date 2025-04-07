import React from 'react';
import { HighlightWrapper, HighlightContent } from './style';

const ServiceHighlight = () => {
  return (
    <HighlightWrapper>
      <HighlightContent>
        <h2>Dịch Vụ Nổi Bật: Tiệc Cưới Đẳng Cấp</h2>
        <p>
          Biến giấc mơ tiệc cưới của bạn thành hiện thực với không gian lãng mạn, dịch vụ chuyên nghiệp, và những khoảnh khắc không thể quên.
        </p>
        <button className="highlight-button">Đặt Ngay</button>
      </HighlightContent>
    </HighlightWrapper>
  );
};

export default ServiceHighlight;