import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderSkycam from "../components/headerSkycam/HeaderSkycam";
import Navbar from "../components/navbar/Navbar";
import SkycamDesc from "../components/skycamDesc/SkycamDesc";
import SkycamFeatures from "../components/skycamFeatures/SkycamFeatures";
import TssProducts from "../components/tssProducts/TssProducts";

const Skycam = () => {
  useEffect(() => {
    document.title = "Skycam";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderSkycam />
      <SkycamDesc />
      <SkycamFeatures />
      <TssProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Skycam;
