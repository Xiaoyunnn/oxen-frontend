import React from "react";
import "./productsDesc.css";

const ProductsDesc = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Products</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/solar125W.jpeg"
              alt="solar125W"
              className="pdt-img"
            />
          </div>

          <div className="txt-wrapper">
            <h5>Solar Panels</h5>
            <p>Source of energy for our green energy system.</p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="pdt-img-wrapper">
            <img src="/assets/nm1.jpeg" alt="noise-meter" className="pdt-img" />
          </div>
          <div className="txt-wrapper">
            <h5>Noise Meter</h5>
            <p>Key feature of our noise monitoring System</p>
          </div>
        </div>
      </div>

      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/vibrationProduct.png"
              alt="vibration-pdt"
              className="pdt-img"
            />
          </div>

          <div className="txt-wrapper">
            <h5>Vibration Meter</h5>
            <p>Focus of our surveillance system.</p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="pdt-img-wrapper">
            <img src="/assets/cctv-pdt.jpg" alt="cctv" className="pdt-img" />
          </div>
          <div className="txt-wrapper">
            <h5>CCTV Cameras</h5>
            <p>Focus of our surveillance system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDesc;
