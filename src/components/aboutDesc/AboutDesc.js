import React from "react";

const AboutDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>
          OST is an IT technology company specialising in the distribution and
          maintenance of monitoring systems for construction sites
        </h3>
        <p>
          The Internet of Things (IoT) has dramatically changed the way the
          construction industry operates. There are now numerous opportunities
          in which companies can adopt IoT technology to support construction
          safety, efficiency, and sustainability.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img src="/assets/about-desc.jpg" alt="about-desc" />
      </div>
    </div>
  );
};

export default AboutDesc;
