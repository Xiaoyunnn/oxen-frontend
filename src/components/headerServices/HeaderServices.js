import React from "react";

const HeaderServices = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
rgba(39, 44, 73, 0) 107.37%), url("/assets/header-services.jpg")`,
      }}
    >
      <div className="header-text">
        <h1>Services</h1>
        <p style={{ width: "50%" }}>
          Regular calibration ensures that your measurements are consistently
          reliable, so you’ll always enjoy peace of mind in your work.
        </p>
      </div>
    </div>
  );
};

export default HeaderServices;
