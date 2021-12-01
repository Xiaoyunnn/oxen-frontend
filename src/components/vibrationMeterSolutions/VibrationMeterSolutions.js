import React from "react";
import { Link } from "react-router-dom";

const VibrationMeterSolutions = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Solutions</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/vibration1.png"
              alt="noise-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/vibration-monitoring-system">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>

          <div className="txt-wrapper">
            <div className="solution-title">
              <h5>Vibration Monitoring System</h5>
            </div>
            <p>
              OST Technologies is a Real Time Vibration Monitoring service
              provider
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibrationMeterSolutions;
