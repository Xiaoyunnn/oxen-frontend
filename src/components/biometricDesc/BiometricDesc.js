import React from "react";

const BiometricDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>Integration of various biometric devices</h3>
        <p>
          OST Technologies’ Biometric Authentication System (BAS) integrated
          with a variety of biometrics devices such as fingerprint, face
          recognition and proximity card devices. Manpower data from these
          devices is then processed using our latest BAS Solutions which able to
          calculate the working hours details like lateness, overtime and so on.
          With the BAS, we can ensure safety and security within the
          construction site to prevent unauthorized, illegal workers entering
          into the site. Our Software also adheres to BCA's Manpower and
          Construction Productivity Data Collection.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img src="/assets/turnstile.jpg" alt="noise-monitoring" />
      </div>
    </div>
  );
};

export default BiometricDesc;
