import React from "react";
import "./solarTable.css";

const SolarTable = () => {
  return (
    <div className="container">
      <div className="table-wrapper">
        <div style={{ marginRight: "2.5rem" }}>
          <h5 style={{ textAlign: "left" }}>About Products</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td className="even-col">YS125M-36</td>
              </tr>
              <tr>
                <td>Rated Maximum Power at STC</td>
                <td className="even-col">125W</td>
              </tr>
              <tr>
                <td>Maximum Power Voltage (Vmp)</td>
                <td className="even-col">18.78V</td>
              </tr>
              <tr>
                <td>Maximum Power Current (Imp)</td>
                <td className="even-col">6.03A</td>
              </tr>
              <tr>
                <td>Open Circuit Voltage (Voc)</td>
                <td className="even-col">22.85V</td>
              </tr>
              <tr>
                <td>Module Efficiency</td>
                <td className="even-col">16.88%</td>
              </tr>
              <tr>
                <td>Power Tolerance</td>
                <td className="even-col">0 ~ +3%</td>
              </tr>
            </tbody>
          </table>
          <p className="caption">
            STC: irradiance 1000W/m2, Module Temperature 25C, Air Mass 1.5
          </p>
        </div>

        <div>
          <h5 style={{ textAlign: "left" }}>Mechanical Parameters</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table>
            <tbody>
              <tr>
                <td>Cell Type</td>
                <td className="even-col">
                  Mono-crystalline 125x125mm (6 inch)
                </td>
              </tr>
              <tr>
                <td>No. of Cells</td>
                <td className="even-col">36 (4 x 9)</td>
              </tr>
              <tr>
                <td>Dimension</td>
                <td className="even-col">1199mm x 543mm x 35mm 3.2mm</td>
              </tr>
              <tr>
                <td>Glass</td>
                <td className="even-col">
                  High Transmission, Low Iron, Tempered Glass
                </td>
              </tr>
              <tr>
                <td>Junction Box</td>
                <td className="even-col">Junction Box IP65 & IP67 rated</td>
              </tr>
              <tr>
                <td>Output Cable</td>
                <td className="even-col">Size: 2.5mm2, Length: 600m</td>
              </tr>
              <tr>
                <td>Frame</td>
                <td className="even-col">Anodized Aluminium Alloy</td>
              </tr>
              <tr>
                <td>No. of Bypass Diodes</td>
                <td className="even-col">2</td>
              </tr>
              <tr>
                <td>Connector</td>
                <td className="even-col">MC4 Compatible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-wrapper">
        <div style={{ marginRight: "2.5rem" }}>
          <h5 style={{ textAlign: "left" }}>Working Conditions</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table>
            <tbody>
              <tr>
                <td>Maximum System Voltage</td>
                <td className="even-col">
                  DC 1000V(IEC) / 1500V(IEC) / 600V(UL)
                </td>
              </tr>
              <tr>
                <td>Operating Temperature</td>
                <td className="even-col">-40°C ~ +85°C</td>
              </tr>
              <tr>
                <td>Maximum Series Fuse</td>
                <td className="even-col">15A</td>
              </tr>
              <tr>
                <td>NOCT</td>
                <td className="even-col">45 ± 2°C</td>
              </tr>
              <tr>
                <td>Application Class</td>
                <td className="even-col">A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-img-wrapper">
          <h5 style={{ textAlign: "left" }}>Temperature Coefficient</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table>
            <tbody>
              <tr>
                <td>Temperature Coefficient of Pmax</td>
                <td className="even-col">-0.40% /°C</td>
              </tr>
              <tr>
                <td>Temperature Coefficient of Voc</td>
                <td className="even-col">-0.30% /°C</td>
              </tr>
              <tr>
                <td>Temperature Coefficient of Isc</td>
                <td className="even-col">+0.06% /°C</td>
              </tr>
            </tbody>
          </table>
          <img src="/assets/solar125W2.jpeg" alt="solar-graph" />
        </div>
      </div>
    </div>
  );
};

export default SolarTable;
