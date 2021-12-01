import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderNoiseMonitoringSys from "../components/headerNoiseMonitoringSys/HeaderNoiseMonitoringSys";
import Navbar from "../components/navbar/Navbar";
import NoiseFeatures from "../components/noiseFeatures/NoiseFeatures";
import NoiseMonitoringDesc from "../components/noiseMonitoringDesc/NoiseMonitoringDesc";
import NoiseProducts from "../components/noiseProducts/NoiseProducts";

const NoiseMonitoringSys = () => {
  useEffect(() => {
    document.title = "Noise Monitoring System";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderNoiseMonitoringSys />
      <NoiseMonitoringDesc />
      <NoiseFeatures />
      <NoiseProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default NoiseMonitoringSys;
