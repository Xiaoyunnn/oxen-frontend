import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderNoiseMeter from "../components/headerNoiseMeter/HeaderNoiseMeter";
import Navbar from "../components/navbar/Navbar";
import NoiseMeterDesc from "../components/noiseMeterDesc/NoiseMeterDesc";
import NoiseMeterProduct from "../components/noiseMeterProduct/NoiseMeterProduct";
import NoiseMeterSolutions from "../components/noiseMeterSolutions/NoiseMeterSolutions";

const NoiseMeter = () => {
  useEffect(() => {
    document.title = "Noise Meter";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderNoiseMeter />
      <NoiseMeterDesc />
      <NoiseMeterProduct />
      <NoiseMeterSolutions />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default NoiseMeter;
