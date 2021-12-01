import React, { useEffect } from "react";
import CctvDesc from "../components/cctvDesc/CctvDesc";
import CctvProducts from "../components/cctvProducts/CctvProducts";
import CctvSolutions from "../components/cctvSolutions/CctvSolutions";
import Enquiry from "../components/enquiry/Enquiry";
import Footer from "../components/footer/Footer";
import HeaderCctvCameras from "../components/headerCctvCameras/HeaderCctvCameras";
import Navbar from "../components/navbar/Navbar";

const CctvCameras = () => {
  useEffect(() => {
    document.title = "CCTV Cameras";
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderCctvCameras />
      <CctvDesc />
      <CctvProducts />
      <CctvSolutions />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default CctvCameras;
