import React, { useState } from "react";
import { Link } from "react-router-dom";
import GreenSystem from "../tssFeatures/GreenSystem";

const CctvSurveillanceFeatures = () => {
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
              <p>Public Utility Board of Singapore (PUB) approved.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Land Transport Authority of Singapore (LTA) approved.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Housing Development Board of Singapore (HDB) approved.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Video management system.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Options with minimum 2 wide-angle Pan-Till-Zoom (PTZ) cameras.
              </p>
            </div>
          </div>

          <div className="features-col">
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Web-based, Real-time viewing with user-ID and password
                protected.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Real-time video viewing through mobile phone.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Options of using 4G or via wireless bridge.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Supported with IP67 waterproof cameras.</p>
            </div>
          </div>
        </div>
      ) : (
        <GreenSystem />
      )}

      <Link to="/assets/CCTV.pdf" target="_blank" download>
        <button className="learn-more">Download PDF</button>
      </Link>
    </div>
  );
};

export default CctvSurveillanceFeatures;
