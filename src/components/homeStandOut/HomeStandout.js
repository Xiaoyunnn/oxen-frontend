import React from "react";
import "./homeStandout.css";

const HomeStandout = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>What Makes Us Stand Out</h2>

      <div className="img-text-container home-standout">
        <div className="characteristic-card-wrapper">
          <div className="characteristic-title flex-center">
            <img src="/assets/ecofriend.png" alt="eco-friendly" />
            <h4>Eco Friendly</h4>
          </div>
          <p>
            Majority of our products run on renewable energy - solar energy.
          </p>
        </div>

        <div className="characteristic-card-wrapper even">
          <div className="characteristic-title flex-center">
            <img src="/assets/reliable.png" alt="reliable" />
            <h4>Reliability</h4>
          </div>
          <p>
            With our maintenance contract, we have a prompt response time of 24
            hours. We supply products that are affordable for all range of
            consumers
          </p>
        </div>

        <div className="characteristic-card-wrapper">
          <div className="characteristic-title flex-center">
            <img src="/assets/convenient.png" alt="convenience" />
            <h4>Convenience</h4>
          </div>
          <p>
            Our set ups are portable, convenient and durable, suitable for even
            the harshest of conditions.
          </p>
        </div>

        <div className="characteristic-card-wrapper even">
          <div className="characteristic-title flex-center">
            <img src="/assets/govt.png" alt="govt" />
            <h4>Government Approved</h4>
          </div>
          <p>
            Approved (Land Transport Authority) LTA Technology Supplier for
            on-site Sky Cameras. Approved (Public Utility Board) PUB Technology
            Supplier for Earth Control Measure’s CCTV monitoring system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStandout;
