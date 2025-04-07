import React from 'react';
import Header from '../components/Header/Header'; // Giả sử bạn có Header
import Hero from '../components/Rooms/Hero';
import RoomsList from '../components/Rooms/RoomsList';
import Footer from '../components/Footer/Footer'

const RoomsPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RoomsList />
      <Footer />
    </div>
  );
};

export default RoomsPage;