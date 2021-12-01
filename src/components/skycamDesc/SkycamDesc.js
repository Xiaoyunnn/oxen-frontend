import React from "react";

const SkycamDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>Remote Traffic Monitoring System (Skycam)</h3>
        <p>
          We provide CCTV systems for monitoring of floor activities on
          construction site. Our specialties include CCTV for tower crane, CCTV
          sky camera, time lapse CCTV. As a service provider recognised by the
          regulators, we advise and assist contractors to ensure that the CCTV
          met all the compliance requirements set forth by the regulators. We
          use the wireless and solar technology to capture video image
          continually at work site, and work progress will be fed back to the
          site office. This will help to monitor the works progress and identify
          should there be any lapses in safety
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img src="/assets/bigcam.jpeg" alt="noise-monitoring" />
      </div>
    </div>
  );
};

export default SkycamDesc;
