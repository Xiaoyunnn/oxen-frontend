import React from "react";
import "./headerNoiseMonitoringSys.css";

const HeaderNoiseMonitoringSys = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
    rgba(39, 44, 73, 0) 107.37%), url("/assets/header-noise-monitoring.jpg")`,
      }}
    >
      <div className="header-text">
        <h1>Noise Monitoring System</h1>
      </div>
    </div>
  );
};

export default HeaderNoiseMonitoringSys;
