import React, { useEffect } from "react";
import CctvSurveillanceDesc from "../components/cctvSurveillanceDesc/CctvSurveillanceDesc";
import CctvSurveillanceFeatures from "../components/cctvSurveillanceFeatures/CctvSurveillanceFeatures";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderCctvSurveillance from "../components/headerCctvSurveillance/HeaderCctvSurveillance";
import Navbar from "../components/navbar/Navbar";
import TssProducts from "../components/tssProducts/TssProducts";

const CctvSurveillance = () => {
  useEffect(() => {
    document.title = "CCTV Surveillance System";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderCctvSurveillance />
      <CctvSurveillanceDesc />
      <CctvSurveillanceFeatures />
      <TssProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default CctvSurveillance;
