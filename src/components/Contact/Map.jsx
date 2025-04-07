import React from 'react';
import { MapSection, MapWrapper } from './style';

const Map = () => {
  return (
    <MapSection>
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669684939391!2d106.68028731525831!3d10.759917162432944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f843d65f%3A0x14dd8d1b5b9eab13!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1601234567890!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </MapWrapper>
    </MapSection>
  );
};

export default Map;