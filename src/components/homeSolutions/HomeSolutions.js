import React from "react";
import "./homeSolutions.css";

const HomeSolutions = () => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      <h2>Solutions</h2>
      <p className="subheader">We provide complete construction solutions.</p>

      <div className="img-text-container">
        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/slm.jpeg"
              alt="noise-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <button className="hover-btn">View More</button>
            </div>
          </div>

          <div className="txt-wrapper">
            <h3>Noise Monitoring System</h3>
            <p>
              OST is a Singapore NEA approved Real Time Noise Monitoring service
              provider.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/ecm.jpeg"
              alt="tss-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <button className="hover-btn">View More</button>
            </div>
          </div>
          <div className="txt-wrapper">
            <h3>TSS Monitoring System</h3>
            <p>
              OST is an approved PUB technology vendor for TSS monitoring
              system. TSS monitoring system is to monitor the silty discharge
              for most of the construction sites.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/bigcam.jpeg"
              alt="skycam-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <button className="hover-btn">View More</button>
            </div>
          </div>
          <div className="txt-wrapper">
            <h3>Remote Traffic Monitoring System (Skycam)</h3>
            <p>
              We provide CCTV systems for monitoring of floor activities on
              construction site. Our specialties include CCTV for tower crane,
              CCTV sky camera, time lapse CCTV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
