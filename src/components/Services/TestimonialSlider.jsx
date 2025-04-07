import React, { useState, useEffect } from 'react';
import { TestimonialWrapper, TestimonialContainer, TestimonialCard } from './style';

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: 'Dịch vụ tuyệt vời! Nhà hàng có không gian sang trọng và món ăn rất ngon.',
      author: 'Nguyễn Văn A',
    },
    {
      quote: 'Phòng nghỉ sạch sẽ, tiện nghi, và nhân viên rất thân thiện.',
      author: 'Trần Thị B',
    },
    {
      quote: 'Tiệc cưới của chúng tôi thật hoàn hảo nhờ đội ngũ chuyên nghiệp của khách sạn!',
      author: 'Lê Minh C',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Chuyển slide mỗi 5 giây
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <TestimonialWrapper>
      <TestimonialContainer>
        <TestimonialCard>
          <p>"{testimonials[current].quote}"</p>
          <span>- {testimonials[current].author}</span>
        </TestimonialCard>
      </TestimonialContainer>
    </TestimonialWrapper>
  );
};

export default TestimonialSlider;