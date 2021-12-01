import React from "react";
import NoiseMeterTable from "./NoiseMeterTable";

const NoiseMeterProduct = () => {
  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper">
        <div className="toggled-header" style={{ width: "100%" }}>
          Delta Ohm
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "0" }}>
        <div className="solar-img-wrapper">
          <img src="/assets/nm1.jpeg" alt="noise-meter" />
          <img src="/assets/nm2.jpeg" alt="noise-meter" />
        </div>
        <NoiseMeterTable />
      </div>
    </div>
  );
};

export default NoiseMeterProduct;
