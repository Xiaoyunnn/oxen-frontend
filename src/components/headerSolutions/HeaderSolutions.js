import React from "react";

const HeaderSolutions = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
rgba(39, 44, 73, 0) 107.37%), url("/assets/header-solutions.jpg")`,
      }}
    >
      <div className="header-text">
        <h1>Solutions</h1>
        <p className="solution-header-caption">
          Complete consturction solutions that meets government's regulations.
        </p>
      </div>
    </div>
  );
};

export default HeaderSolutions;
