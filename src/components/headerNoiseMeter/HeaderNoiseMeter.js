import React from "react";

const HeaderNoiseMeter = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
    rgba(39, 44, 73, 0) 107.37%), url("/assets/header-noise-meter.jpeg")`,
      }}
    >
      <div className="header-text">
        <h1>Noise Meter</h1>
      </div>
    </div>
  );
};

export default HeaderNoiseMeter;
