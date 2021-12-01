import React, { useEffect } from "react";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderTss from "../components/headerTss/HeaderTss";
import Navbar from "../components/navbar/Navbar";
import TssFeatures from "../components/tssFeatures/TssFeatures";
import TssDesc from "../components/tssDesc/TssDesc";
import TssProducts from "../components/tssProducts/TssProducts";

const Tss = () => {
  useEffect(() => {
    document.title = "TSS";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderTss />
      <TssDesc />
      <TssFeatures />
      <TssProducts />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Tss;
