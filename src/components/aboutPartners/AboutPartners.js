import React from "react";
import "./aboutPartners.css";

const AboutPartners = () => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      <h2 style={{ marginBottom: "1.5rem" }}>Our Partners</h2>
      <div className="partner-row flex-center">
        <div className="partner-grid">
          <img src="/assets/Picture1.png" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture2.jpg" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture3.gif" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture4.png" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture5.png" alt="partner" />
        </div>
      </div>

      <div className="partner-row flex-center">
        <div className="partner-grid">
          <img src="/assets/Picture6.png" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture7.jpg" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture8.png" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture9.jpg" alt="partner" />
        </div>
        <div className="partner-grid">
          <img src="/assets/Picture10.jpg" alt="partner" />
        </div>
      </div>

      <div className="partner-row flex-center">
        <div className="partner-grid">
          <img src="/assets/OKP.png" alt="partner" />
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;
