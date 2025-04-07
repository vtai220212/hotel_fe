import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Contact/Hero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/Footer/Footer'


const ContactPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ContactInfo />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default ContactPage; 