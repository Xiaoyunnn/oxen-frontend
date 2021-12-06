import React, { useState } from "react";
import "./slider.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import homeSolutionsData from "../homeSolutions/homeSolutionsData";
import HomeSolutionsCard from "../homeSolutions/HomeSolutionsCard";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < homeSolutionsData.length - 1) {
      // not last slide
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === homeSolutionsData.length - 1) {
      // last slide -> set next slide to first slide
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      // first slide -> set prev slide to last slide
      setSlideIndex(homeSolutionsData.length - 1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {homeSolutionsData.map((item, index) => {
        return (
          <div
            key={item.id}
            className={slideIndex === index ? "slide active-slide" : "slide"}
          >
            <HomeSolutionsCard item={item} />
          </div>
        );
      })}
      <ArrowForwardIos onClick={nextSlide} className="btn-slide next" />
      <ArrowBackIos
        onClick={prevSlide}
        className="btn-slide next"
        style={{ left: "5px" }}
      />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={slideIndex === index ? "dot active-dot" : "dot"}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
