import React from "react";
import { Link } from "react-router-dom";
import "./solarSolutions.css";

const SolarSolutions = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Relevant Solutions</h2>
      <div className="products-container">
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/cctv1.png"
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
              OST Technologies provide CCTV systems for monitoring of floor
              activities on construction site. Our specialties include CCTV for
              tower crane, CCTV sky camera, time lapse CCTV, etc.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/slm.jpeg"
              alt="noise-meter"
              className="pdt-img sol-image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/noise-monitoring-system">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <h5>Noise Meter System</h5>
            <p>
              OST Technologies is a Singapore NEA approved Real Time Noise
              Monitoring service provider.
            </p>
          </div>
        </div>
      </div>

      <div className="products-container second">
        <div className="img-wrapper flex-center flex-col solar-pdt">
          <div className="img-hover-wrapper product-image">
            <img
              src="/assets/ecm.jpeg"
              alt="turbidity-sensor"
              className="pdt-img sol-image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/tss">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>

          <div className="txt-wrapper">
            <h5>Turbidity Solid Sensor</h5>
            <p>
              OST is an approved PUB technology vendor for TSS monitoring
              system. TSS monitoring system is to monitor silty discharge for
              construction sites.
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
              OST Technologies provide CCTV systems for monitoring of floor
              activities on construction site. Our specialties include CCTV for
              tower crane, CCTV sky camera, time lapse CCTV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSolutions;
