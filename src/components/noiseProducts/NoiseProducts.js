import React from "react";
import { Link } from "react-router-dom";
import "./noiseProducts.css";

const NoiseProducts = () => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      <h2>Relevant Products</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/solar125W.jpeg"
              alt="solar125W"
              className="pdt-img"
            />
            <div className="hover-btn-wrapper">
              <Link to="/solar-panels">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper product-text">
            <h5>Solar Panels</h5>

            <p>Source of energy for our green energy system.</p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="img-hover-wrapper product-image">
            <img src="/assets/nm1.jpeg" alt="noise-meter" className="pdt-img" />
            <div className="hover-btn-wrapper">
              <Link to="/noise-meter">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper product-text">
            <h5>Noise Meter</h5>

            <p>Key feature of our noise monitoring System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseProducts;
