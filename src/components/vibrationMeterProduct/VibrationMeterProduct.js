import React from "react";
import VibrationMeterTable from "./VibrationMeterTable";

const VibrationMeterProduct = () => {
  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper">
        <div className="toggled-header" style={{ width: "100%" }}>
          SWARM
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "0" }}>
        <div className="solar-img-wrapper">
          <img src="/assets/omnidot1.png" alt="vibration-meter" />
          <img src="/assets/omnidot2.png" alt="vibration-meter" />
        </div>
        <VibrationMeterTable />
      </div>
    </div>
  );
};

export default VibrationMeterProduct;
