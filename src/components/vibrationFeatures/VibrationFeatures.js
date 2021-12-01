import React, { useState } from "react";
import { Link } from "react-router-dom";
import GreenSystem from "../tssFeatures/GreenSystem";

const VibrationFeatures = () => {
  const [isFeatureToggle, setIsFeatureToggle] = useState(true);

  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper">
        <div
          className={isFeatureToggle ? "toggled-header" : "untoggled-header"}
          onClick={() => setIsFeatureToggle(true)}
        >
          Features
        </div>
        <div
          className={isFeatureToggle ? "untoggled-header" : "toggled-header"}
          onClick={() => setIsFeatureToggle(false)}
        >
          Green Energy System
        </div>
      </div>

      {isFeatureToggle ? (
        <div className="features">
          <div className="features-col">
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Wireless real-time construction vibration monitoring system.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Complies with industry standard DIN4150 part 3.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                With 3-axis (X, Y, Z) direction, PPV, PPA, PVS, VDV, Velocity
                traces measuring points.
              </p>
            </div>
          </div>

          <div className="features-col">
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Online web portal with 3 levels alert setting.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Unlimited SMS and email alerts.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>GPS location trackers.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Daily reporting from the system.</p>
            </div>
          </div>
        </div>
      ) : (
        <GreenSystem />
      )}

      <Link to="/assets/Ecm.pdf" target="_blank" download>
        <button className="learn-more">Download PDF</button>
      </Link>
    </div>
  );
};

export default VibrationFeatures;
