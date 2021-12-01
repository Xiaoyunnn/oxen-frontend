import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./noiseFeatures.css";

const NoiseFeatures = () => {
  const [isFeatureToggle, setIsFeatureToggle] = useState(true);

  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper">
        <div
          className={isFeatureToggle ? "toggled-header" : "untoggled-header"}
          onClick={() => setIsFeatureToggle(true)}
        >
          Key Features
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
              <p>National Environmental Agency (NEA) approved</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Automatic analysis with reference to legal requirements for
                different periods. Leq 5 min, 1 hour and 12 hour
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>SMS & Email alerts</p>
            </div>
          </div>

          <div className="features-col">
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Web-based, Real-time Noise monitoring (user-password protected)
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Various report formats including 24/7, SMS alert, full report
                can be view anytime and everywhere.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Retrievable data for selected dates over the internet</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="noise-green-sys">
          <div className="flex-align-start">
            <i className="fas fa-leaf" />
            <p>24/7 via solar energy</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-leaf" />
            <p>
              With solar power, no human intervention is needed and the system
              will do this seamlessly and automatically
            </p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-leaf" />
            <p>
              Backup power supply to ensure continuous operation during day and
              night
            </p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-leaf" />
            <p>Low maintenance cost</p>
          </div>
        </div>
      )}

      <Link to="/assets/NoiseMeter.pdf" target="_blank" download>
        <button className="learn-more">Download pdf</button>
      </Link>
    </div>
  );
};

export default NoiseFeatures;
