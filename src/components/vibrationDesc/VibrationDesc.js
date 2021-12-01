import React from "react";

const VibrationDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>
          SWARM vibration monitoring system is a real-time and web-based system.
        </h3>
        <p>
          The SWARM will continuously get measurement data via 4G/LTE, WiFi or
          PoE using an adapter and transfer the data to the web server, the user
          can access the measuring data 24/7 via web portal with password
          protected login. The system will send alerts to designated persons
          whenever the vibration limits (such as PVS) are exceeded. This will
          provide Project teams with the tool to monitor and control vibration
          limit at construction sites.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img
          src="/assets/vibration1.png"
          alt="noise-monitoring"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default VibrationDesc;
