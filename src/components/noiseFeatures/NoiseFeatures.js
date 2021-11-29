import React, { useState } from "react";
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
        <div>Green Energy system</div>
      )}

      <button className="learn-more">Download pdf</button>
    </div>
  );
};

export default NoiseFeatures;
