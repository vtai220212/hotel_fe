import React from 'react';
import DescriptionContent from './DescriptionContent';
import DescriptionImage from './DescriptionImage';
import { DescriptionSectionWrapper, DescriptionSectionContainer } from './style';

const DescriptionSection = () => {
  return (
    <DescriptionSectionWrapper>
      <DescriptionSectionContainer>
        <DescriptionContent />
        <DescriptionImage />
      </DescriptionSectionContainer>
    </DescriptionSectionWrapper>
  );
};

export default DescriptionSection;