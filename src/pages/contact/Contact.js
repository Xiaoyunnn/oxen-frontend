import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderContact from "../../components/headerContact/HeaderContact";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeaderContact />
      <Enquiry page="contact" />
      <Footer />
    </div>
  );
};

export default Contact;
