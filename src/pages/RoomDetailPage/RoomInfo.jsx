import React from 'react';
import { InfoContainer, InfoItem, IconColumn, ContentColumn } from './styles/RoomInfoStyles';
import { FaBed } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaMaximize } from "react-icons/fa6";
import { FaTree } from "react-icons/fa6";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";

const RoomInfo = ({ price, discount, beds, guests, area, view }) => {
  return (
    <InfoContainer>
      <InfoItem>
        <IconColumn>
          <FaBed size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Số Giường</span>
          <span>{beds} Giường Đôi</span>
        </ContentColumn>
      </InfoItem>
      <InfoItem>
        <IconColumn>
          <HiUserGroup size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Số Khách</span>
          <span>{guests} Khách</span>
        </ContentColumn>
      </InfoItem>
      <InfoItem>
        <IconColumn>
          <FaMaximize size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Diện Tích</span>
          <span>{area} m²</span>
        </ContentColumn>
      </InfoItem>
      <InfoItem>
        <IconColumn>
          <FaTree size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Quang Cảnh</span>
          <span>{view}</span>
        </ContentColumn>
      </InfoItem>
      <InfoItem>
        <IconColumn>
          <FaMoneyBillWaveAlt size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Giá Phòng</span>
          <span>{price} VNĐ/đêm</span>
        </ContentColumn>
      </InfoItem>
      <InfoItem>
        <IconColumn>
          <FaPercentage size={40} />
        </IconColumn>
        <ContentColumn>
          <span>Giảm Giá</span>
          <span>{discount}</span>
        </ContentColumn>
      </InfoItem>
    </InfoContainer>
  );
};

export default RoomInfo;