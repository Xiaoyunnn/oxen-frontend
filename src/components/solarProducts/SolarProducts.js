import React, { useState } from "react";
import SolarTable from "../solarTable/SolarTable";
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
          <SolarTable />
        </div>
      )}
    </div>
  );
};

export default SolarProducts;
