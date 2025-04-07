import React from 'react';
import { DescriptionImageWrapper } from './style';
import ImgDes from '../../assets/resort-swim.jpg';

const DescriptionImage = () => {
  return (
    <DescriptionImageWrapper style={{ backgroundImage: `url(${ImgDes})` }} />
  );
};

export default DescriptionImage;