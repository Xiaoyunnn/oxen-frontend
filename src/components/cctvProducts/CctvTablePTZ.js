import React from "react";

const CctvTablePTZ = () => {
  return (
    <div className="container solar-table">
      <div className="table-wrapper">
        <div>
          <h5 style={{ textAlign: "left" }}>Specifications</h5>
          <hr style={{ marginBottom: "6px" }} />
          <table className="sc-table">
            <tbody>
              <tr>
                <td>Model – BC05-5MP</td>
                <td className="even-col">
                  1080P Outdoor Surveillance IP Camera
                </td>
              </tr>
              <tr>
                <td>Sensor</td>
                <td className="even-col">1/2.8" IMX335 CMOS 3516EV300</td>
              </tr>
              <tr>
                <td>Lens</td>
                <td className="even-col">3.6mm fixed lens</td>
              </tr>
              <tr>
                <td>Minimum Illumination</td>
                <td className="even-col">
                  0.5 Lux@F1.2 (AGC ON), 0.05 Lux@F1.2 (BLACK）0Lux (IR on)
                </td>
              </tr>
              <tr>
                <td>Day & Night</td>
                <td className="even-col">
                  Automatic ICR filter color to black, fixed black and white,
                  fixed color, external control
                </td>
              </tr>
              <tr>
                <td>Gain Control</td>
                <td className="even-col">Auto/Manual</td>
              </tr>
              <tr>
                <td>White Balance</td>
                <td className="even-col">
                  Automatic, indoor, outdoor, sodium lamp mode, manual
                </td>
              </tr>
              <tr>
                <td>Digital Noise Reduction</td>
                <td className="even-col">Support DNR, 3DNR</td>
              </tr>
              <tr>
                <td>Exposure Mode</td>
                <td className="even-col">
                  Program mode (customizable shutter interval), shutter mode
                  (1/5 - 1/20,000s), slow shutter support
                </td>
              </tr>
              <tr>
                <td>Video Compression</td>
                <td className="even-col">
                  H.265 Main Profile / H.264 Main profile / M-JPEG <br />
                  G.711 support bidirectional talk, audio & video
                  synchronization
                </td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td className="even-col">2592x1520@18fps</td>
              </tr>
              <tr>
                <td>Video Resolution</td>
                <td className="even-col">
                  Main stream – (12592x1944, 2592x1520, 2304x1296, 1920x1080,
                  1280x960, 1280×720, 720×576, 640×480) <br />
                  Sub stream – (640×480,480x360, 352×288, 320×240, 176×144)
                  MJPEG – 1920x1080,1280x720
                </td>
              </tr>
              <tr>
                <td>Output Bit Rate</td>
                <td className="even-col">
                  Fixed code stream (CBR) or variable bit rate (VBR), code
                  stream can be set range: 32K~10M
                </td>
              </tr>
              <tr>
                <td>Motion Detection</td>
                <td className="even-col">Support 4 motion detection areas</td>
              </tr>
              <tr>
                <td>Privacy Area</td>
                <td className="even-col">Support 4 privacy zones</td>
              </tr>
              <tr>
                <td>Mobile Phone Remote</td>
                <td className="even-col">
                  Support Android, iOS smartphone access
                </td>
              </tr>
              <tr>
                <td>Network Protocol</td>
                <td className="even-col">
                  TCP/IP, HTTP, NTP, IGMP, DHCP, UDP, SMTP, RTP, RTSP, ARP,
                  DDNS, DNS, P2P
                </td>
              </tr>
              <tr>
                <td>Compatibility</td>
                <td className="even-col">
                  Compatible with 3rd Party Software like iSpy, Milestone,
                  Digifort, Zoneminder and Blue Iris <br />
                  Onvif protocol GB/T28281,work with Hikvision, DaHua, XM,
                  Amcrest NVR and QNAP Storage
                </td>
              </tr>
              <tr>
                <td>Maximum System Voltage</td>
                <td className="even-col">
                  DC 1000V(IEC) / 1500V(IEC) / 600V(UL)
                </td>
              </tr>
              <tr>
                <td>Network Interface</td>
                <td className="even-col">
                  1 way 10/100BaseT Ethernet, RJ45 interface
                </td>
              </tr>
              <tr>
                <td>Onvif</td>
                <td className="even-col">Strand onvif 2.4</td>
              </tr>
              <tr>
                <td>GB28181</td>
                <td className="even-col">Support</td>
              </tr>
              <tr>
                <td>Power</td>
                <td className="even-col">12V1A/POE</td>
              </tr>
              <tr>
                <td>Package</td>
                <td className="even-col">11x11x10cm 0.68kg</td>
              </tr>
              <tr>
                <td>Working Temperature</td>
                <td className="even-col">-30°C ~ 60°C</td>
              </tr>
              <tr>
                <td>Working Humidity</td>
                <td className="even-col">0% ~ 90% RH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CctvTablePTZ;
