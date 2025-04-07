import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Services/Hero';
import ServiceList from '../components/Services/ServiceList';
import CTA from '../components/Services/CTA';
import Footer from '../components/Footer/Footer'


const ServicesPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceList />
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;