import React from "react";

const TssSystem = () => {
  return (
    <div className="features">
      <div className="features-col">
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>Public Utility Board of Singapore (PUB) approved</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>Installed at ECM water treatment tank.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>
            Provides integrated information with reference to legal
            requirements.
          </p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>Web based interface for TSS monitoring system.</p>
        </div>
      </div>

      <div className="features-col">
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>24/7 measuring the amount of TSS in the treated water.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>24/7 readings can be viewed online or from the on-site display.</p>
        </div>
        <div className="flex-align-start">
          <i className="fas fa-check-circle" />
          <p>SMS and email warnings to designated personnel.</p>
        </div>
      </div>
    </div>
  );
};

export default TssSystem;
