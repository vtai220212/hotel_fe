import React, { useState } from 'react';
import { AmenitiesContainer, AmenitiesTitle, AmenitiesList, AmenityItem, AmenityIcon, ToggleButton } from './styles/HotelAmenitiesStyles';
import LogoWifi from '../../assets/wifi.png';
import LogoParking from '../../assets/Group-40.png';
import LogoSpa from '../../assets/spa.png';
import LogoSwimming from '../../assets/be-boi.png';
import LogoGym from '../../assets/gym.png';
import LogoVault from '../../assets/kets.png';
import LogoTv from '../../assets/ico_booking.png';
import LogoPhone from '../../assets/icon_phone.png';
import LogoShower from '../../assets/icon_shower.png';
import LogoSafe from '../../assets/icon_vault.png';
import LogoBreakfast from '../../assets/an-sansg.png';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const HotelAmenities = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hotelAmenities = [
    { name: 'Wi-Fi', icon: LogoWifi },
    { name: 'Bãi đỗ xe', icon: LogoParking },
    { name: 'Spa', icon: LogoSpa },
    { name: 'Bể bơi', icon: LogoSwimming },
    { name: 'Gym', icon: LogoGym },
    { name: 'Két sắt', icon: LogoVault },
    { name: 'Tivi', icon: LogoTv },
    { name: 'Điện thoại', icon: LogoPhone },
    { name: 'Vòi hoa sen', icon: LogoShower },
    { name: 'Két an toàn', icon: LogoSafe },
    { name: 'Ăn sáng', icon: LogoBreakfast },
  ];

  const visibleAmenities = isExpanded ? hotelAmenities : hotelAmenities.slice(0, 6);

  return (
    <AmenitiesContainer>
      <AmenitiesTitle>Tiện ích khách sạn</AmenitiesTitle>
      <AmenitiesList>
        {visibleAmenities.map((amenity, index) => (
          <AmenityItem key={index}>
            <AmenityIcon>
              <img src={amenity.icon} alt={amenity.name} />
            </AmenityIcon>
            {amenity.name}
          </AmenityItem>
        ))}
      </AmenitiesList>
      {hotelAmenities.length > 6 && (
        <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleButton>
      )}
    </AmenitiesContainer>
  );
};

export default HotelAmenities;