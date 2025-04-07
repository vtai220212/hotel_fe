import React from 'react';
import { ServiceCard, ServiceImage, ServiceContent } from './style';

const ServiceItem = ({ title, description, image, isLeft }) => {
  return (
    <ServiceCard isLeft={isLeft}>
      <ServiceImage style={{ backgroundImage: `url(${image})` }} />
      <ServiceContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more">Learn More</button>
      </ServiceContent>
    </ServiceCard>
  );
};

export default ServiceItem;