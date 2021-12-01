import React from "react";
import { Link } from "react-router-dom";
import "./solutionsGallery.css";

const SolutionsGallery = () => {
  return (
    <div className="container">
      <div className="img-text-container">
        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/ecm.jpeg"
              alt="noise-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/tss">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title">
              <h5>CCTV & Total Suspended Solid (TSS) Monitoring System</h5>
            </div>
            <p>
              OST is an approved PUB technology vendor for TSS monitoring
              system. TSS monitoring system is to monitor silty discharge for
              construction sites.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/slm.jpeg"
              alt="tss-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/noise-monitoring-system">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title">
              <h5>Noise Meter Monitoring System</h5>
            </div>
            <p>
              OST Technologies is a Singapore NEA approved Real Time Noise
              Monitoring service provider.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/vibration1.png"
              alt="skycam-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/vibration-monitoring-system">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title">
              <h5>Vibration Monitoring System</h5>
            </div>
            <p>
              OST Technologies is a Real Time Vibration Monitoring service
              provider.
            </p>
          </div>
        </div>
      </div>

      <div className="img-text-container">
        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/cctv1.png"
              alt="noise-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/cctv-surveillance">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title-2">
              <h5>CCTV Surveillance System</h5>
            </div>
            <p>
              OST Technologies provide CCTV systems for monitoring of floor
              activities on construction site. Our specialties include CCTV for
              tower crane, CCTV sky camera, time lapse CCTV, etc.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/bigcam.jpeg"
              alt="tss-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/skycam">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title-2">
              <h5>Remote Traffic Monitoring System (Skycam)</h5>
            </div>
            <p>
              OST Technologies provide CCTV systems for monitoring of floor
              activities on construction site.
            </p>
          </div>
        </div>

        <div className="img-wrapper flex-center flex-col">
          <div className="img-hover-wrapper">
            <img
              src="/assets/turnstile.jpg"
              alt="skycam-monitoring"
              className="image"
            />
            <div className="hover-btn-wrapper">
              <Link to="/biometric-authentication-system">
                <button className="hover-btn">View More</button>
              </Link>
            </div>
          </div>
          <div className="txt-wrapper">
            <div className="solution-gallery-title-2">
              <h5>Biometric Authentication System</h5>
            </div>
            <p>
              OST Technologies’ Biometric Authentication System (BAS) integrated
              with variety of biometrics devices such as fingerprint, face
              recognition and proximity card devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsGallery;
