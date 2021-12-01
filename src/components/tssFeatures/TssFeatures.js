import React, { useState } from "react";
import { Link } from "react-router-dom";
import CctvSystem from "./CctvSystem";
import GreenSystem from "./GreenSystem";
import TssSystem from "./TssSystem";

const TssFeatures = () => {
  const [selected, setSelected] = useState("TSS");

  return (
    <div className="noise-features-wrapper">
      <div className="toggle-wrapper solar-wrapper">
        <div
          className={selected === "TSS" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("TSS")}
        >
          TSS System
        </div>
        <div
          className={
            selected === "CCTV" ? "toggled-header" : "untoggled-header"
          }
          onClick={() => setSelected("CCTV")}
        >
          CCTV Monitoring System
        </div>
        <div
          className={selected === "GES" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("GES")}
        >
          Green Energy System
        </div>
      </div>

      {selected === "TSS" && <TssSystem />}
      {selected === "CCTV" && <CctvSystem />}
      {selected === "GES" && <GreenSystem />}

      <Link to="/assets/Ecm.pdf" target="_blank" download>
        <button className="learn-more">Download PDF</button>
      </Link>
    </div>
  );
};

export default TssFeatures;
