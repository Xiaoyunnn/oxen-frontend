import React from "react";
import Enquiry from "../../components/enquiry/Enquiry";
import Footer from "../../components/footer/Footer";
import HeaderProducts from "../../components/headerProducts/HeaderProducts";
import Navbar from "../../components/navbar/Navbar";
import ProductsDesc from "../../components/productsDesc/ProductsDesc";

const Products = () => {
  return (
    <div>
      <Navbar />
      <HeaderProducts />
      <ProductsDesc />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Products;
