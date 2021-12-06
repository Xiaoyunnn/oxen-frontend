import React from "react";

const PTZDesc = () => {
  return (
    <div>
      <div className="table-wrapper cctv-row">
        <div className="cctv-col cctv-margin">
          <h5>5MP Full HD Video Quality</h5>
          <p>
            High-performance image sensor CMOS, 2592x1920, resolution 3.6mm
            fixed lens with advanced 3D dynamic noise reduction technology.
          </p>
        </div>

        <div className="cctv-col">
          <h5>Power Over Ethernet (POE) Camera</h5>
          <p>
            Single Cat5 Cable for both power and data transmission. This wired
            outdoor security camera would have stable connection than wifi
            cameras. No power adapter required would reduce the work of
            installation. POE: 48V-52V (IEEE 802.3af standard). Packaged with
            power adapter in event is required.
          </p>
        </div>
      </div>

      <div className="table-wrapper cctv-row">
        <div className="cctv-col cctv-margin">
          <h5>Infrared Night Vision Up To 65ft: Waterproof IP67</h5>
          <p>
            The indoor/outdoor security camera come with 36 pieces infrared LED
            and black glass, black glass can avoid visible light and reflection
            of glass, It makes night vision clearer compare to traditional
            camera. It comes with unique design and IP67 level waterproof steady
            aluminum case. It also has extra protection to ensure these security
            cameras will be durable enough for using outdoor under bad weather
            condition. It has also passed CE, FCC. RoHs Test.
          </p>
        </div>

        <div className="cctv-col">
          <h5>Onvif Compatible</h5>
          <p>
            Compatible with 3rd Party Software like iSpy, Milestone, Digi fort,
            Zoneminder and Blue Iris (This does not mean our camera would work
            with all the 3rd party software, if you are using a software not
            listed here, please contact us for support). Support Onvif protocol
            GB/T28281, work with Hikvision, DaHua, XM, Amcrest NVR and QNAP
            storage etc. Support provided directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PTZDesc;
