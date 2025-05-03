import React from 'react';
import { AmenitiesContainer, AmenitiesTitle, AmenitiesList, AmenityItem, AmenityIcon } from './styles/RoomAmenitiesStyles';
import LogoWifi from '../../assets/wifi.png';
import LogoTv from '../../assets/ico_booking.png';
import LogoPhone from '../../assets/icon_phone.png';
import LogoShower from '../../assets/icon_shower.png';
import LogoVault from '../../assets/kets.png';
import LogoParking from '../../assets/Group-40.png'; // Thêm icon cho "Bãi đỗ xe"

const RoomAmenities = () => {
  // Hard-code danh sách tiện ích phòng với icon
  const amenities = [
    { name: 'Wi-Fi', icon: LogoWifi },
    { name: 'TV', icon: LogoTv },
    { name: 'Điện thoại', icon: LogoPhone },
    { name: 'Vòi hoa sen', icon: LogoShower },
    { name: 'Bãi đỗ xe', icon: LogoParking },
    { name: 'Két sắt', icon: LogoVault },
  ];

  return (
    <AmenitiesContainer>
      <AmenitiesTitle>Tiện ích phòng</AmenitiesTitle>
      <AmenitiesList>
        {amenities.map((amenity, index) => (
          <AmenityItem key={index}>
            <AmenityIcon>
              <img src={amenity.icon} alt={amenity.name} />
            </AmenityIcon>
            {amenity.name}
          </AmenityItem>
        ))}
      </AmenitiesList>
    </AmenitiesContainer>
  );
};

export default RoomAmenities;