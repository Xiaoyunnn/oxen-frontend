import React from "react";

const CctvSystem = () => {
  return (
    <div className="features">
      <div className="features-col">
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>Installed at the discharge point leading to the public drain.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>24/7 CCTV surveillance camera.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>24/7 monitoring of water discharge.</p>
        </div>
      </div>

      <div className="features-col">
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>5 minutes snapshot can be viewed online and via mobile.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>Backup power supply to ensure continuous operation.</p>
        </div>
      </div>
    </div>
  );
};

export default CctvSystem;
