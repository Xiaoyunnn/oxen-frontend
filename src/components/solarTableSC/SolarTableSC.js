import React from "react";

const SolarTableSC = () => {
  return (
    <div className="container">
      <div className="table-wrapper">
        <div>
          <h5 style={{ textAlign: "left" }}>Technical Parameters</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table className="sc-table">
            <tbody>
              <tr>
                <td>Dual USB Port</td>
                <td className="even-col">
                  The solar charge controller with dual USB ports, 12V/24V auto.
                </td>
              </tr>
              <tr>
                <td>Rated Charge & Discharge Current</td>
                <td className="even-col">10A</td>
              </tr>
              <tr>
                <td>Solar Battery</td>
                <td className="even-col">
                  Solar Charge controller is only suitable for lead-acid
                  batteries: OPEN, AGM, GEL, not for nickel hydride, lithium,
                  Lions, or other batteries. It's another model for lithium
                  battery.
                </td>
              </tr>
              <tr>
                <td>Easy to install and operate</td>
                <td className="even-col">
                  Solar controller can clearly indicate the status and data, it
                  can conveniently switch between modes and parameter
                  configurations.
                </td>
              </tr>
              <tr>
                <td>Good Heat Dissipation</td>
                <td className="even-col">
                  Dual mosfet reverse current protection, low heat production
                  (ALL electronice components generate heat when they are
                  running, it is better to shelter them for better heat
                  dissipation, avoid direct sunlight exposure or damp place)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SolarTableSC;
