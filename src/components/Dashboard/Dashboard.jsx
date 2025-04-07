// src/components/Dashboard.jsx
import React from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const StatTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #a1b4b6;
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const OccupancySection = styled.div`
  background: #2e3b3e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const OccupancyTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #a1b4b6;
`;

const OccupancyBar = styled.div`
  background: #1a2526;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const OccupancyFill = styled.div`
  background: #ffd700;
  height: 100%;
  width: ${props => props.percentage}%; // Sử dụng dữ liệu tĩnh
  transition: width 0.3s ease;
`;

const Dashboard = () => {
  // Dữ liệu tĩnh để hiển thị giao diện
  const stats = {
    currentGuests: 25,   // Số khách hiện tại
    todayRent: 10,       // Số phòng thuê hôm nay
    thisMonthRent: 150,  // Số phòng thuê trong tháng này
  };

  const occupancyRate = 75; // Tỷ lệ lấp đầy (tĩnh, 75%)

  return (
    <DashboardWrapper>
      <Title>Hotel Management Dashboard</Title>

      {/* Phần thống kê */}
      <StatsContainer>
        <StatBox>
          <StatTitle>Current Guests</StatTitle>
          <StatValue>{stats.currentGuests}</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>Today Rent</StatTitle>
          <StatValue>{stats.todayRent}</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>This Month Rent</StatTitle>
          <StatValue>{stats.thisMonthRent}</StatValue>
        </StatBox>
      </StatsContainer>

      {/* Phần tỷ lệ lấp đầy */}
      <OccupancySection>
        <OccupancyTitle>Occupancy Rate</OccupancyTitle>
        <OccupancyBar>
          <OccupancyFill percentage={occupancyRate} />
        </OccupancyBar>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>{occupancyRate}%</p>
      </OccupancySection>
    </DashboardWrapper>
  );
};

export default Dashboard;