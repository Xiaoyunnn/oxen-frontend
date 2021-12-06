import React from "react";
import { Link } from "react-router-dom";
import "./productDesc.css";

const ProductsDesc = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Products</h2>
      <div className="product-pg-container">
        <div className="img-wrapper flex-center flex-col noise-pdt first">
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

        <div className="img-wrapper flex-center flex-col noise-pdt ">
          <div className="img-hover-wrapper product-image">
            <img src="/assets/nm1.jpeg" alt="nm1" className="pdt-img" />
            <div className="hover-btn-wrapper">
              <Link to="/noise-meter">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>

          <div className="txt-wrapper">
            <h5>Noise Meter</h5>
            <p>Key feature of our noise monitoring System</p>
          </div>
        </div>
      </div>

      <div className="product-pg-container">
        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/vibrationProduct.png"
              alt="vibration-meter"
              className="pdt-img"
            />
            <div className="hover-btn-wrapper">
              <Link to="/vibration-meter">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>

          <div className="txt-wrapper">
            <h5>Vibration Meter</h5>
            <p>Focus of our vibration monitoring system.</p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col noise-pdt">
          <div className="img-hover-wrapper product-image">
            <img src="/assets/cctv-pdt.jpg" alt="cctv" className="pdt-img" />
            <div className="hover-btn-wrapper">
              <Link to="/cctv-cameras">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
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
