import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderVibrationMeter from "../components/headerVibrationMeter/HeaderVibrationMeter";
import Navbar from "../components/navbar/Navbar";
import VibrationMeterDesc from "../components/vibrationMeterDesc/VibrationMeterDesc";
import VibrationMeterProduct from "../components/vibrationMeterProduct/VibrationMeterProduct";
import VibrationMeterSolutions from "../components/vibrationMeterSolutions/VibrationMeterSolutions";

const VibrationMeter = () => {
  useEffect(() => {
    document.title = "Vibration Meter";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderVibrationMeter />
      <VibrationMeterDesc />
      <VibrationMeterProduct />
      <VibrationMeterSolutions />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default VibrationMeter;
