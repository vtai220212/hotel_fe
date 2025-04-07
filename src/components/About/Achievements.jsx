import React from 'react';
import { FaUsers, FaGlobe, FaStar, FaHotel } from 'react-icons/fa';
import { AchievementsWrapper, AchievementsContainer, StatsGrid, StatItem } from './style';



const Achievements = () => {
  const stats = [
    { icon: <FaUsers className="icon" />, number: "50,000+", label: "Khách Hàng" },
    { icon: <FaGlobe className="icon" />, number: "100+", label: "Điểm Đến" },
    { icon: <FaHotel className="icon" />, number: "1,000+", label: "Khách Sạn" },
    { icon: <FaStar className="icon" />, number: "4.8/5", label: "Đánh Giá" }
  ];

  return (
    <AchievementsWrapper>
      <AchievementsContainer>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              {stat.icon}
              <div className="number">{stat.number}</div>
              <div className="label">{stat.label}</div>
            </StatItem>
          ))}
        </StatsGrid>
      </AchievementsContainer>
    </AchievementsWrapper>
  );
};

export default Achievements;