import React from 'react';
import RoomItem from './RoomItem';
import { RoomsWrapper, RoomsContainer, RoomsGrid } from './style';
import Deluxe from '../../assets/deluxe.jpg';
import Senior from '../../assets/senior.jpg';
import Suite from '../../assets/suite.jpg';
import Family from '../../assets/family.jpg';
import Connecting from '../../assets/connecting.jpg';


const RoomsList = () => {
  const rooms = [
    {
      title: 'Phòng Deluxe Hướng Thành Phố',
      price: '$30',
      discount: '25%',
      beds: 1,
      guests: 2,
      image: Deluxe,
    },
    {
      title: 'Phòng Senior De. Hướng Biển',
      price: '$40',
      discount: '20%',
      beds: 2,
      guests: 2,
      image: Senior,
    },
    {
      title: 'Phòng Suite Triple Cổ Điển',
      price: '$50',
      discount: '45%',
      beds: 3,
      guests: 3,
      image: Suite,
    },
    {
      title: 'Phòng Family Suite Cổ Điển',
      price: '$60',
      discount: '35%',
      beds: 1,
      guests: 2,
      image: Family,
    },
    {
      title: 'Phòng Connecting Hướng Biển',
      price: '$90',
      discount: '40%',
      beds: 2,
      guests: 4,
      image: Connecting,
    },
  ];

  return (
    <RoomsWrapper>
      <RoomsContainer>
        <RoomsGrid>
          {rooms.map((room, index) => (
            <RoomItem
              key={index}
              title={room.title}
              price={room.price}
              discount={room.discount}
              beds={room.beds}
              guests={room.guests}
              image={room.image}
            />
          ))}
        </RoomsGrid>
      </RoomsContainer>
    </RoomsWrapper>
  );
};

export default RoomsList;