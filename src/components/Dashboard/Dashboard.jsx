import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { DashboardWrapper, Title, ChartsContainer } from './styles/DashboardStyles';
import StatsSection from './StatsSection';
import OccupancySection from './OccupancySection';
import RevenueChart from './RevenueChart';
import NewCustomersChart from './NewCustomersChart';
import TopRoomsChart from './TopRoomsChart';
import { getDashboardStats } from '../../services/dashboardService';

const Dashboard = () => {
  const { data: statsData, isLoading, error } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats,
    staleTime: 5 * 60 * 1000, // 5 phút
  });

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

  const { currentGuests, todayRent, thisMonthRent, occupancyRate, revenueData, newCustomersData, topRoomsData } = statsData;

  const stats = {
    currentGuests,
    todayRent,
    thisMonthRent,
  };

  return (
    <DashboardWrapper>
      <Title>Hotel Management Dashboard</Title>
      <StatsSection stats={stats} />
      <OccupancySection occupancyRate={occupancyRate} />
      <ChartsContainer>
        <RevenueChart data={revenueData} />
        <NewCustomersChart data={newCustomersData} />
        <TopRoomsChart data={topRoomsData} />
      </ChartsContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;