import React from 'react';
import { OccupancySectionStyled, OccupancyTitle, OccupancyBar, OccupancyFill } from './styles/OccupancySectionStyles';

const OccupancySection = ({ occupancyRate }) => {
  return (
    <OccupancySectionStyled>
      <OccupancyTitle>Occupancy Rate</OccupancyTitle>
      <OccupancyBar>
        <OccupancyFill percentage={occupancyRate} />
      </OccupancyBar>
      <p style={{ marginTop: '10px', textAlign: 'center' }}>{occupancyRate}%</p>
    </OccupancySectionStyled>
  );
};

export default OccupancySection;