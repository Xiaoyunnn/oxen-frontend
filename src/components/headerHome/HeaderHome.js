import React from "react";
import "./headerHome.css";

const HeaderHome = () => {
  return (
    <div
      className="header-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
        rgba(39, 44, 73, 0) 107.37%), url("/assets/homeheader.jpg")`,
      }}
    >
      <div className="header-text">
        <h1>OST Technologies</h1>
        <p>
          A complete solution provider for Singapore's construction industry.
        </p>
        <button className="learn-more">Learn more</button>
      </div>
    </div>
  );
};

export default HeaderHome;
