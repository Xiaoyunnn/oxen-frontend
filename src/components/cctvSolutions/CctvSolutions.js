import React from "react";
import { Link } from "react-router-dom";

const CctvSolutions = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Solutions</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/solar-cctv.jpg"
              alt="solar125W"
              className="pdt-img sol-image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/cctv-surveillance">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>

          <div className="txt-wrapper">
            <h5>CCTV Surveillance</h5>
            <p>
              Integrated into system as a source of energy for our green energy
              system.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/bigcam.jpeg"
              alt="skycam"
              className="pdt-img sol-image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/skycam">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <h5>Traffic Monitoring (SkyCam)</h5>
            <p>
              Integrated into system as a source of energy for our green energy
              system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CctvSolutions;
