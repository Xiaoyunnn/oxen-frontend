import React from "react";
import "./noiseProducts.css";

const NoiseProducts = () => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      <h2>Relevant Products</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col noise-pdt">
          <img
            src="/assets/solar125W.jpeg"
            alt="solar125W"
            className="pdt-img"
          />

          <div className="txt-wrapper">
            <h3>Solar Panels</h3>
            <p>Source of energy for our green energy system.</p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col noise-pdt">
          <img src="/assets/nm1.jpeg" alt="noise-meter" className="pdt-img" />

          <div className="txt-wrapper">
            <h3>Noise Meter</h3>
            <p>Key feature of our noise monitoring System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseProducts;
