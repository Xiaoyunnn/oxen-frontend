import React from "react";

const NoiseMeterDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>Modules with highly efficient silicon cells</h3>
        <p>
          Our series of modules consist of Mono-Crystalline high efficient
          silicon cells, which are individually characterized and electronically
          matched before interconnection and laminated with toughened glass, EVA
          & Backsheet of high quality. After assembled with anodized aluminium
          alloy frame, cable and junction box with MC4 connectors. Our modules
          can be easily installed and last for long period, at the same time, it
          can withstand storm, strong wind and hail impact.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img
          src="/assets/nmcover.jpg"
          alt="noise-meter"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default NoiseMeterDesc;
