import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/About/Hero';
import Story from '../components/About/Story';
import Values from '../components/About/Values';
import Team from '../components/About/Team';
import Achievements from '../components/About/Achievements';
import Testimonials from '../components/About/Testimonials';
import Footer from '../components/Footer/Footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Story />
      <Achievements />
      <Values />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;