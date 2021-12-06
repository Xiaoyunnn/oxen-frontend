import React from "react";
import "./homeSolutions.css";
import HomeSolutionsCard from "./HomeSolutionsCard";
import homeSolutionsData from "./homeSolutionsData";
import Slider from "../slider/Slider";

const HomeSolutions = () => {
  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Solutions</h2>
      <p className="subheader">We provide complete construction solutions.</p>

      <div className="img-text-container home-solutions">
        {homeSolutionsData.map((item, index) => {
          return <HomeSolutionsCard key={item.id} item={item} />;
        })}
      </div>
      <Slider />
    </div>
  );
};

export default HomeSolutions;
