import React from "react";
import "./noiseMonitoringDesc.css";

const NoiseMonitoringDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>
          OST is a Singapore NEA approved Real Time Noise Monitoring service
          provider.
        </h3>
        <p>
          We use Delta Ohm class 1 integrating sound level meters, Delta Ohm
          instruments are manufactured in Italy and widely used in Singapore,
          for critical research and industry applications. We provide solutions
          using 4G technology for the real time noise monitoring system.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img src="/assets/slm.jpeg" alt="noise-monitoring" />
      </div>
    </div>
  );
};

export default NoiseMonitoringDesc;
