import React, { useEffect } from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderSolutions from "../../components/headerSolutions/HeaderSolutions";
import Navbar from "../../components/navbar/Navbar";
import SolutionsGallery from "../../components/solutionsGallery/SolutionsGallery";

const Solutions = () => {
  useEffect(() => {
    document.title = "Solutions";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderSolutions />
      <SolutionsGallery />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Solutions;
