import React from 'react';
import { FaHeart, FaAward, FaHandshake } from 'react-icons/fa';
import { ValuesWrapper, ValuesContainer, ValuesGrid, ValueCard } from './style';


const Values = () => {
  const values = [
    {
      icon: <FaHeart className="icon" />,
      title: 'Tận Tâm',
      description: 'Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu.'
    },
    {
      icon: <FaAward className="icon" />,
      title: 'Chất Lượng',
      description: 'Đảm bảo mọi trải nghiệm đều đạt tiêu chuẩn cao nhất.'
    },
    {
      icon: <FaHandshake className="icon" />,
      title: 'Tin Cậy',
      description: 'Xây dựng mối quan hệ dựa trên sự minh bạch và đáng tin cậy.'
    }
  ];

  return (
    <ValuesWrapper>
      <ValuesContainer>
        <h2>Giá Trị Cốt Lõi</h2>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              {value.icon}
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesContainer>
    </ValuesWrapper>
  );
};

export default Values;