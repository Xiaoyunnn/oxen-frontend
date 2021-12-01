import React, { useState } from "react";
import SolarTable125 from "../solarTable/SolarTable125";
import SolarTable30 from "../solarTable30/SolarTable30";
import SolarTable50 from "../solarTable50/SolarTable50";
import SolarTableSC from "../solarTableSC/SolarTableSC";
import "./solarProducts.css";

const SolarProducts = () => {
  const [selected, setSelected] = useState("125W");
  return (
    <div className="noise-features-wrapper" style={{ paddingBottom: "0" }}>
      <div className="toggle-wrapper solar-wrapper">
        <div
          className={
            selected === "125W" ? "toggled-header" : "untoggled-header"
          }
          onClick={() => setSelected("125W")}
        >
          125W
        </div>
        <div
          className={selected === "50W" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("50W")}
        >
          50W
        </div>
        <div
          className={selected === "30W" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("30W")}
        >
          30W
        </div>
        <div
          className={selected === "SC" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("SC")}
        >
          Solar Controller
        </div>
      </div>

      {selected === "125W" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/solar125W.jpeg" alt="solar-125W" />
            <img src="/assets/solar125W1.jpeg" alt="solar-125W" />
          </div>
          <SolarTable125 />
        </div>
      )}

      {selected === "50W" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/solar50W.jpg" alt="solar-50W" />
            <img src="/assets/solar50W.jpeg" alt="solar-50W" />
          </div>
          <SolarTable50 />
        </div>
      )}

      {selected === "30W" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/solar30W.jpg" alt="solar-30W" />
            <img src="/assets/solar30W.jpeg" alt="solar-30W" />
          </div>
          <SolarTable30 />
        </div>
      )}

      {selected === "SC" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/solarcontroller.jpeg" alt="solar-SC" />
            <img src="/assets/solarcontroller1.jpeg" alt="solar-SC" />
          </div>
          <SolarTableSC />
        </div>
      )}
    </div>
  );
};

export default SolarProducts;
