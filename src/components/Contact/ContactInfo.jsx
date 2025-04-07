import React from 'react';
import { InfoSection, InfoWrapper, InfoTitle, InfoItem, Icon, InfoText } from './style';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <InfoSection>
      <InfoWrapper>
        <InfoTitle>Thông Tin Liên Hệ</InfoTitle>
        <InfoItem>
          <Icon><FaPhone /></Icon>
          <InfoText>+84 123 456 789</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon><FaEnvelope /></Icon>
          <InfoText>support@example.com</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon><FaMapMarkerAlt /></Icon>
          <InfoText>123 Đường ABC, TP. Hồ Chí Minh, Việt Nam</InfoText>
        </InfoItem>
      </InfoWrapper>
    </InfoSection>
  );
};

export default ContactInfo;