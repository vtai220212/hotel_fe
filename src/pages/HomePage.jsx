import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import DescriptionSection from '../components/Description/DescriptionSection';
import RoomsList from '../components/RoomList/RoomsList';
import Services from '../components/Services/ServiceList';

const HomePage = () => {
  // console.log('Rendering HomePage'); // Comment log sau khi debug
  return (
    <div>
      <Header />
      <Banner />
      <DescriptionSection />
      <RoomsList />
      <Services />

      <Footer />
    </div>
  );
};

export default React.memo(HomePage);