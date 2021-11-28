import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Navbar from "../../components/navbar/Navbar";
import HeaderHome from "../../components/headerHome/HeaderHome";
import HomeSolutions from "../../components/homeSolutions/HomeSolutions";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <HomeSolutions />
      <Enquiry />
    </div>
  );
};

export default Home;
