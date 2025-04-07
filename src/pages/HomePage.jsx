import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import DescriptionSection from '../components/Description/DescriptionSection';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DescriptionSection />
      <Footer />
    </div>
  );
};

export default HomePage;