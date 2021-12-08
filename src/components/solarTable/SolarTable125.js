import React from "react";
import "./solarTable.css";

const SolarTable125 = () => {
  return (
    <div className="container solar-table">
      <div className="table-wrapper">
        <div className="table-margin">
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
            STC: irradiance 1000W/m<sup>2</sup>, Module Temperature 25C, Air
            Mass 1.5
          </p>
        </div>

        <div className="mech-param">
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
                <td className="even-col">1199mm x 543mm x 35mm</td>
              </tr>
              <tr>
                <td>Glass</td>
                <td className="even-col">
                  3.2mm, High Transmission, Low Iron, Tempered Glass
                </td>
              </tr>
              <tr>
                <td>Junction Box</td>
                <td className="even-col">IP65 & IP67 rated</td>
              </tr>
              <tr>
                <td>Output Cable</td>
                <td className="even-col">
                  Section Size: 2.5mm<sup>2</sup>, Length: 600m
                </td>
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
        <div className="table-margin">
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
                <td className="even-col">Class A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-img-wrapper table-margin-top">
          <h5 style={{ textAlign: "left" }}>Temperature Coefficient</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table>
            <tbody>
              <tr>
                <td>
                  Temperature Coefficient of P<sub>max</sub>
                </td>
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

export default SolarTable125;
