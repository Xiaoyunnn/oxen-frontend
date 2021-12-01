import React, { useState } from "react";
import GreenSystem from "../tssFeatures/GreenSystem";

const SkycamFeatures = () => {
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
              <p>Land Transport Authority of Singapore (LTA) approved.</p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Supply and maintain a remote traffic monitoring system with
                video cameras.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Capable of using advance technologies, antenna or wireless to
                create access point, coverage more than 10km.
              </p>
            </div>
          </div>

          <div className="features-col">
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Site managers and project team is able to access 24/7 over
                internet in order to efficiently manage construction at one
                glance.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>
                Video recording available according to regulator's requirements.
              </p>
            </div>
            <div className="flex-align-start">
              <i className="fas fa-check-circle" />
              <p>Using wireless 3G/4G LTE via M2M SIM card or antenna.</p>
            </div>
          </div>
        </div>
      ) : (
        <GreenSystem />
      )}
    </div>
  );
};

export default SkycamFeatures;
