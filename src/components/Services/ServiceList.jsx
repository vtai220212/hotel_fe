import React from 'react';
import ServiceItem from './ServiceItem';
import { ServicesWrapper, ServicesContainer, ServicesGrid } from './style';
import Restaurant from '../../assets/food.jpg';
import SkyBar from '../../assets/skybar.jpg';
import Spa from '../../assets/spa.jpg';
import Rooms from '../../assets/rooms.jpg';
import SwimmingPool from '../../assets/swimming.jpg';
import Event from '../../assets/bride.jpg';

const ServicesList = () => {
  const services = [
    {
      title: 'Nhà Hàng',
      description: 'Hệ thống phòng tiệc lớn, linh hoạt, được đầu tư với thiết bị hiện đại, sẽ là gợi ý tuyệt vời cho các đám cưới cao cấp và hội nghị.',
      image: Restaurant,
    },
    {
      title: 'Sky Bar',
      description: 'Tận hưởng khoảnh khắc của bạn với những ly cocktail nổi bật, hoặc nếu bạn thích, có thể chọn các loại trà quốc tế và cà phê địa phương được phục vụ mát lạnh sảng khoái.',
      image: SkyBar,
    },
    {
      title: 'Spa Hotale',
      description: 'Thư giãn và tái tạo năng lượng với dịch vụ spa chuyên nghiệp của chúng tôi trong một không gian yên bình.',
      image: Spa,
    },
    {
      title: 'Phòng Nghỉ Sang Trọng',
      description: 'Trải nghiệm kỳ nghỉ sang trọng với các tiện nghi hiện đại và thiết kế tinh tế.',
      image: Rooms,
    },
    {
      title: 'Hồ Bơi Vô Cực',
      description: 'Thư giãn tại hồ bơi vô cực của chúng tôi với tầm nhìn tuyệt đẹp và không gian sang trọng.',
      image: SwimmingPool,
    },
    {
      title: 'Sự Kiện & Hội Nghị',
      description: 'Tổ chức sự kiện của bạn với các phòng hội nghị công nghệ cao và dịch vụ hỗ trợ toàn diện.',
      image: Event,
    },
  ];

  return (
    <ServicesWrapper>
      <ServicesContainer>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              isLeft={index % 2 === 0} // 1, 3, 5 bên trái; 2, 4, 6 bên phải
            />
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default ServicesList;