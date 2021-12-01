import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderVibration from "../components/headerVibration/HeaderVibration";
import Navbar from "../components/navbar/Navbar";
import VibrationDesc from "../components/vibrationDesc/VibrationDesc";
import VibrationFeatures from "../components/vibrationFeatures/VibrationFeatures";
import VibrationProducts from "../components/vibrationProducts/VibrationProducts";

const VibrationSys = () => {
  useEffect(() => {
    document.title = "Vibration Monitoring System";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderVibration />
      <VibrationDesc />
      <VibrationFeatures />
      <VibrationProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default VibrationSys;
