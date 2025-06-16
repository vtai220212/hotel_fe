import React from 'react';
import { StatsContainer, StatBox, StatTitle, StatValue } from './styles/StatsSectionStyles';

const StatsSection = ({ stats }) => {
  return (
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
  );
};

export default StatsSection;