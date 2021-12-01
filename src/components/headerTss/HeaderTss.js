import React from "react";

const HeaderTss = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
    rgba(39, 44, 73, 0) 107.37%), url("/assets/cover2.jpeg")`,
      }}
    >
      <div className="header-text">
        <h1>TSS</h1>
      </div>
    </div>
  );
};

export default HeaderTss;
