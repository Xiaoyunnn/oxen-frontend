import React from "react";

const HeaderProducts = () => {
  return (
    <div
      className="subheader-wrapper flex-col"
      style={{
        backgroundImage: `linear-gradient(90.13deg, #272c49 38.49%, 
rgba(39, 44, 73, 0) 107.37%), url("/assets/header-products.jpg")`,
      }}
    >
      <div className="header-text">
        <h1>Products</h1>
        <p className="solution-header-caption">
          Range of products incorporated with our solutions.
        </p>
      </div>
    </div>
  );
};

export default HeaderProducts;
