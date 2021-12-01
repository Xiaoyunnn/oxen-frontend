import React from "react";

const NoiseMeterTable = () => {
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
                <td className="even-col">HD2010UC</td>
              </tr>
              <tr>
                <td>Noise at Work</td>
                <td className="even-col">SNR, HML</td>
              </tr>
              <tr>
                <td rowSpan={4}>Environment Noise</td>
                <td className="even-col">
                  Automatic detection of impulsive components
                </td>
              </tr>
              <tr>
                <td className="even-col">Road traffic noise</td>
              </tr>
              <tr>
                <td className="even-col">Rail & airport traffic noise</td>
              </tr>
              <tr>
                <td className="even-col">Overall levels measurement</td>
              </tr>
              <tr>
                <td>Standards</td>
                <td className="even-col">IEC 61672</td>
              </tr>
              <tr>
                <td rowSpan={2}>Accuracy</td>
                <td className="even-col">Class 1 (HD2010UC.k1)</td>
              </tr>
              <tr>
                <td className="even-col">Class 1 (HD2010UC.k2)</td>
              </tr>
              <tr>
                <td>Microphone</td>
                <td className="even-col">1/2*, 22.5mV/Pa, free field, 0V</td>
              </tr>
              <tr>
                <td>Dynamic Range</td>
                <td className="even-col">30 - 143 dB Peak</td>
              </tr>
              <tr>
                <td>Linearity Range</td>
                <td className="even-col">80dB</td>
              </tr>
              <tr>
                <td>Acoustic Parameters</td>
                <td className="even-col">
                  L<sub>p</sub>, L<sup>eq</sup>, L<sub>EP</sub>, d, L
                  <sub>max</sub>, L<sub>pk</sub>, Dose, L<sub>n</sub>
                </td>
              </tr>
              <tr>
                <td>Frequency Weighting</td>
                <td className="even-col">
                  Simultaneous A, C, Z (C and Z for L<sub>pk</sub>)
                </td>
              </tr>
              <tr>
                <td>Cell Type</td>
                <td className="even-col">
                  Mono-crystalline 125x125mm (6 inch)
                </td>
              </tr>
              <tr>
                <td>Temporal Weighting</td>
                <td className="even-col">Simultaneous Fast, Slow, Impulse</td>
              </tr>
              <tr>
                <td>Statistical Analysis</td>
                <td className="even-col">
                  LN, levels distribution, cumulative distribution*
                </td>
              </tr>
              <tr>
                <td>Memory</td>
                <td className="even-col">4MB ~ 2GB</td>
              </tr>
              <tr>
                <td>Datalogging</td>
                <td className="even-col">(Available) Option</td>
              </tr>
              <tr>
                <td>ISO 17025 Calibration Certificate</td>
                <td className="even-col">(Available) Option</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoiseMeterTable;
