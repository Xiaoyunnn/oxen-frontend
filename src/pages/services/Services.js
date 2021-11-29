import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderServices from "../../components/headerServices/HeaderServices";
import Navbar from "../../components/navbar/Navbar";
import ServiceForm from "../../components/serviceForm/ServiceForm";
import ServicesDesc from "../../components/servicesDesc/ServicesDesc";

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeaderServices />
      <ServicesDesc />
      <ServiceForm />
      <Footer />
    </div>
  );
};

export default Services;
