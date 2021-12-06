import React from "react";
import "./aboutPartners.css";
import PartnersDesktop from "./PartnersDesktop";
import PartnersMobile from "./PartnersMobile";

const AboutPartners = () => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      <h2 style={{ marginBottom: "1.5rem" }}>Our Partners</h2>
      <PartnersDesktop />
      <PartnersMobile />
    </div>
  );
};

export default AboutPartners;
