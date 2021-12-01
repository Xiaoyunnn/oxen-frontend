import React from "react";

const TssDesc = () => {
  return (
    <div className="desc-img-container">
      <div className="desc-wrapper">
        <h3>CCTV & Total Suspended Solid (TSS) Monitoring System</h3>
        <p>
          OST is an approved PUB technology vendor for TSS monitoring system.
          TSS monitoring system is to monitor the silty discharge for most of
          the construction sites. OST Real Time Total Suspended Solid (TSS)
          Monitoring System provides web-based, CCTV monitoring and image
          recording based on PUB requirements. TSS sensor will be placed in the
          discharge tank to monitor the TSS values, and the TSS values will be
          transferred to a secured website, and alerts will be sent to
          designated persons whenever TSS limits are exceeded. The system
          provides Project managers and ECOs with a tool to monitor and control
          sediment in construction sites.
        </p>
      </div>
      <div className="desc-img-wrapper">
        <img src="/assets/ecm1.jpeg" alt="noise-monitoring" />
      </div>
    </div>
  );
};

export default TssDesc;
