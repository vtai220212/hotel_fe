import React from 'react';
import { StoryWrapper, StoryContainer, StoryContent, StoryImage } from './style';
import ResortSwim from '../../assets/resort-swim.jpg';



const Story = () => {
  return (
    <StoryWrapper>
      <StoryContainer>
        <StoryContent>
          <h2>Câu Chuyện Của Chúng Tôi</h2>
          <p>
            Thành lập năm 2020, chúng tôi bắt đầu với sứ mệnh mang đến những trải nghiệm du lịch độc đáo, kết hợp giữa sự tinh tế và chất lượng vượt trội.
          </p>
          <p>
            Với đội ngũ giàu kinh nghiệm và đam mê, chúng tôi không ngừng khám phá để đem lại những dịch vụ tốt nhất cho khách hàng.
          </p>
        </StoryContent>
        {/* <StoryImage>
          <img src={ResortSwim} alt="Our Story" />
        </StoryImage> */}
      </StoryContainer>
    </StoryWrapper>
  );
};

export default Story;