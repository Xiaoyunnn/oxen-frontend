import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderSolar from "../../components/headerSolar/HeaderSolar";
import Navbar from "../../components/navbar/Navbar";
import SolarPanelsDesc from "../../components/solarPanelsDesc/SolarPanelsDesc";
import SolarProducts from "../../components/solarProducts/SolarProducts";
import SolarSolutions from "../../components/solarSolutions/SolarSolutions";

const SolarPanels = () => {
  return (
    <div>
      <Navbar />
      <HeaderSolar />
      <SolarPanelsDesc />
      <SolarProducts />
      <SolarSolutions />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default SolarPanels;
