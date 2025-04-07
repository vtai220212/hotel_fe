import React from 'react';
import { TestimonialsWrapper, TestimonialsContainer, TestimonialsGrid, TestimonialCard } from './style';
import { FaQuoteRight } from 'react-icons/fa';
import Avatar from '../../assets/avt.png';


const Testimonials = () => {
  const testimonials = [
    {
      content: "Dịch vụ tuyệt vời! Chuyến du lịch của chúng tôi được tổ chức rất chuyên nghiệp và chu đáo.",
      author: "Nguyễn Thị E",
      position: "Khách Hàng",
      image: Avatar
    },
    {
      content: "Đội ngũ nhân viên rất nhiệt tình và thân thiện. Họ đã giúp chúng tôi lên kế hoạch hoàn hảo.",
      author: "Trần Văn F",
      position: "Khách Hàng",
      image: Avatar
    },
    {
      content: "Giá cả hợp lý và chất lượng dịch vụ vượt mong đợi. Tôi đã có những trải nghiệm tuyệt vời.",
      author: "Lê Thị G",
      position: "Khách Hàng",
      image: Avatar
    }
  ];

  return (
    <TestimonialsWrapper>
      <TestimonialsContainer>
        <h2>Khách Hàng Nói Gì?</h2>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <FaQuoteRight className="quote-icon" />
              <p>{testimonial.content}</p>
              <div className="author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div>
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.position}</span>
                </div>

              </div>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;