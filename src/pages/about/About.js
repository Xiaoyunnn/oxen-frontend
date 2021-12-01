import React, { useEffect } from "react";
import AboutDesc from "../../components/aboutDesc/AboutDesc";
import AboutPartners from "../../components/aboutPartners/AboutPartners";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderAbout from "../../components/headerAbout/HeaderAbout";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderAbout />
      <AboutDesc />
      <AboutPartners />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default About;
