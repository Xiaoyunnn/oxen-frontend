import React, { useEffect } from "react";
import BiometricDesc from "../components/biometricDesc/BiometricDesc";
import BiometricFeatures from "../components/biometricFeatures/BiometricFeatures";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderBiometric from "../components/headerBiometric/HeaderBiometric";
import Navbar from "../components/navbar/Navbar";
import TssProducts from "../components/tssProducts/TssProducts";

const BiometricSys = () => {
  useEffect(() => {
    document.title = "Biometric Authentication System";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderBiometric />
      <BiometricDesc />
      <BiometricFeatures />
      <TssProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default BiometricSys;
