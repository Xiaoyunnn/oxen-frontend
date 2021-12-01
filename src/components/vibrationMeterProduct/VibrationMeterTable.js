import React from "react";

const VibrationMeterTable = () => {
  return (
    <div className="container">
      <div className="table-wrapper">
        <div>
          <h5 style={{ textAlign: "left" }}>Specifications</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table className="sc-table">
            <tbody>
              <tr>
                <td>Model</td>
                <td className="even-col">SWARM 2.2b-G</td>
              </tr>
              <tr>
                <td>Directions</td>
                <td className="even-col">X, Y, Z</td>
              </tr>
              <tr>
                <td>Range Frequency</td>
                <td className="even-col">0.5 - 250 Hz</td>
              </tr>
              <tr>
                <td>Range Velocity</td>
                <td className="even-col">±50 mm/s (±2 in/s)</td>
              </tr>
              <tr>
                <td>Range Acceleration</td>
                <td className="even-col">±4 g</td>
              </tr>
              <tr>
                <td>Measurements</td>
                <td className="even-col">
                  PPV, PPA, PVS, VDV, Velocity traces
                </td>
              </tr>
              <tr>
                <td>Noise (RMS)</td>
                <td className="even-col">50 um/s at 250 Hz BW (2 mil/s)</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td className="even-col">1 um/s (0.04 mil/s)</td>
              </tr>
              <tr>
                <td>Dominant Frequency Determination</td>
                <td className="even-col">FFT</td>
              </tr>
              <tr>
                <td>Applications</td>
                <td className="even-col">Construction (metric)</td>
              </tr>
              <tr>
                <td>Sensor type</td>
                <td className="even-col">GPS receiver</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td className="even-col">10 meter CEP (33 ft CEP)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-wrapper">
        <div>
          <h5 style={{ textAlign: "left" }}>Sensor Tilt</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table className="sc-table">
            <tbody>
              <tr>
                <td>Maximum Velocity Level</td>
                <td className="even-col">50 mm/s (2 in/s)</td>
              </tr>
              <tr>
                <td>Range</td>
                <td className="even-col">2 - 6000 seconds</td>
              </tr>
              <tr>
                <td>Range (PPV)</td>
                <td className="even-col">0.2 - 50 mm/s (0.008 - 2 in/s)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-wrapper">
        <div>
          <h5 style={{ textAlign: "left" }}>Alarm Settings</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table className="sc-table">
            <tbody>
              <tr>
                <td>Alarm Level Curve</td>
                <td className="even-col">
                  SBR curve, DIN curve, Circulaire '86, ISEE (USBM RI8507 &
                  OSMRE), SN 640 312a, Straight line
                </td>
              </tr>
              <tr>
                <td>Type of Message</td>
                <td className="even-col">E-mail, SMS, personal dashboard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VibrationMeterTable;
