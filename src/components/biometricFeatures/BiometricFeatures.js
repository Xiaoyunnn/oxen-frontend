import React from "react";

const BiometricFeatures = () => {
  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper">
        <div className="toggled-header" style={{ width: "100%" }}>
          Features
        </div>
      </div>
      <div className="features">
        <div className="features-col">
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>Uses finger, face recognition to verify workers’ identity.</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>High definition infrared cameras.</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>Capacity: Face 500; Fingerprint: 2000; Record: 100,000.</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>Access Control: Built in relay, Door sensor, Wiegand out</p>
          </div>
        </div>

        <div className="features-col">
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>4.3” TFT touch LCD screen.</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>
              Integrate with half height or full height turnstile and able to
              achieve a maximum clearance time of 1 minutes for every 10 person.
            </p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>Built-in 3G Module.</p>
          </div>
          <div className="flex-align-start">
            <i className="fas fa-check-circle" />
            <p>
              Support GSM 3G SIM card for device transmit data independently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiometricFeatures;
