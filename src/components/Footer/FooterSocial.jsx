import React from 'react';
import { FooterSocialWrapper, SocialLink } from './style';

const FooterSocial = () => {
  return (
    <FooterSocialWrapper>
      <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </SocialLink>
      <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
      </SocialLink>
      <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </SocialLink>
    </FooterSocialWrapper>
  );
};

export default FooterSocial;