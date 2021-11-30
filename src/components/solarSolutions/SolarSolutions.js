import React from "react";
import "./solarSolutions.css";

const SolarSolutions = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Solutions</h2>
      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/solar-cctv.jpg"
              alt="solar125W"
              className="pdt-img sol-image"
            />
          </div>

          <div className="txt-wrapper">
            <h5>CCTV surveillance</h5>
            <p>
              Integrated into system as a source of energy for our green energy
              system.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/slm.jpeg"
              alt="noise-meter"
              className="pdt-img sol-image"
            />
          </div>
          <div className="txt-wrapper">
            <h5>Noise Meter System</h5>
            <p>
              Integrated into system as a source of energy for our green energy
              system.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-center" style={{ marginTop: "2.5rem" }}>
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/ecm.jpeg"
              alt="turbidity-sensor"
              className="pdt-img sol-image"
            />
          </div>

          <div className="txt-wrapper">
            <h5>Turbidity Solid Sensor</h5>
            <p>
              Integrated into system as a source of energy for our green energy
              system.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="pdt-img-wrapper">
            <img
              src="/assets/bigcam.jpeg"
              alt="skycam"
              className="pdt-img sol-image"
            />
          </div>
          <div className="txt-wrapper">
            <h5>Traffic monitoring (SkyCam)</h5>
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

export default SolarSolutions;
