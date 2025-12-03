"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.350724033225!2d101.78314287674533!3d2.9999146540482036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb6a7b9159bb%3A0xbdba972eb9b60d5e!2sKPJ%20Kajang%20Specialist%20Hospital!5e0!3m2!1sen!2smy!4v1764487678441!5m2!1sen!2smy" 
          height="550" 
          style={{border:0}} 
          allowFullScreen loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  );
};

export default GoogleMap;
