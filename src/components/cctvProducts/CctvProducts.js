import React, { useState } from "react";
import BC01Desc from "./BC01Desc";
import BC05Desc from "./BC05Desc";
import "./cctvProducts.css";
import CctvTableBC01 from "./CctvTableBC01";
import CctvTableBC05 from "./CctvTableBC05";
import CctvTableDM07 from "./CctvTableDM07";
import CctvTableP2 from "./CctvTableP2";
import CctvTablePTZ from "./CctvTablePTZ";
import DM07Desc from "./DM07Desc";
import P2Desc from "./P2Desc";
import PTZDesc from "./PTZDesc";

const CctvProducts = () => {
  const [selected, setSelected] = useState("BC01");

  return (
    <div className="noise-features-wrapper" style={{ paddingBottom: "0" }}>
      <div className="toggle-wrapper solar-wrapper">
        <div
          className={
            selected === "BC01" ? "toggled-header" : "untoggled-header"
          }
          onClick={() => setSelected("BC01")}
        >
          BC01-2MP
        </div>
        <div
          className={
            selected === "BC05" ? "toggled-header" : "untoggled-header"
          }
          onClick={() => setSelected("BC05")}
        >
          BC05-5MP
        </div>
        <div
          className={
            selected === "DM07" ? "toggled-header" : "untoggled-header"
          }
          onClick={() => setSelected("DM07")}
        >
          DM07-5MP
        </div>
        <div
          className={selected === "PTZ" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("PTZ")}
        >
          4x Mini PTZ IP
        </div>
        <div
          className={selected === "P2" ? "toggled-header" : "untoggled-header"}
          onClick={() => setSelected("P2")}
        >
          P2-20X-5MP
        </div>
      </div>

      {selected === "BC01" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/BC01.jpeg" alt="BC01" />
          </div>
          <BC01Desc />
          <CctvTableBC01 />
        </div>
      )}

      {selected === "BC05" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/BC05.jpeg" alt="BC05" />
          </div>
          <BC05Desc />
          <CctvTableBC05 />
        </div>
      )}

      {selected === "DM07" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/DM07.jpeg" alt="DM07" />
          </div>
          <DM07Desc />
          <CctvTableDM07 />
        </div>
      )}

      {selected === "PTZ" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/H.265.jpeg" alt="H.265" />
          </div>
          <PTZDesc />
          <CctvTablePTZ />
        </div>
      )}

      {selected === "P2" && (
        <div className="container" style={{ paddingBottom: "0" }}>
          <div className="solar-img-wrapper">
            <img src="/assets/Skycam.jpeg" alt="skycam" />
          </div>
          <P2Desc />
          <CctvTableP2 />
        </div>
      )}
    </div>
  );
};

export default CctvProducts;
