import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Navbar from "../../components/navbar/Navbar";
import HeaderHome from "../../components/headerHome/HeaderHome";
import HomeSolutions from "../../components/homeSolutions/HomeSolutions";
import HomeStandout from "../../components/homeStandOut/HomeStandout";
import HomeRepair from "../../components/homeRepair/HomeRepair";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <HomeSolutions />
      <HomeStandout />
      <HomeRepair />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Home;
