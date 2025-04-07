import React from 'react';
import FooterLogo from './FooterLogo';
import FooterInfo from './FooterInfo';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';
import { FooterWrapper, FooterContainer } from './style';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo />
        <FooterInfo />
        <FooterSocial />
        <FooterCopyright />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;