import React from "react";
import { Link } from "react-router-dom";

const HomeSolutionsCard = ({ item }) => {
  return (
    <div className="img-wrapper flex-center flex-col">
      <div className="img-hover-wrapper">
        <img src={"/assets/" + item.imgSrc} alt={item.id} className="image" />
        <div className="hover-btn-wrapper">
          <Link to={item.link}>
            <button className="hover-btn">View More</button>
          </Link>
        </div>
      </div>
      <div className="txt-wrapper">
        <div className="solution-title">
          <h5>{item.title}</h5>
        </div>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default HomeSolutionsCard;
