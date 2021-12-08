import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="img-txt-container flex-align-start">
        <div className="footer-col">
          <div className="footer-name-wrapper">
            <img
              src="./assets/website_logo_transparent_background.png"
              alt="logo"
              className="footer-logo"
            />
            <span className="footer-name">OXEN</span>
          </div>
          <p>
            OST is an IT technology company specialising in the distribution and
            maintenance of monitoring systems for construction sites.
          </p>
          <div className="footer-social">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-subhead">Our Location</h4>

          <p>
            <i className="fas fa-map-marker-alt" />
            Blk 1013 Geylang East Ave 3, #03-144 Singapore 389728
          </p>

          <p>
            <i className="fas fa-map-marker-alt" />
            Blk 1014 Geylang East Ave 3, #06-174 Singapore 389728
          </p>
          <div className="img-hover-wrapper">
            <img
              src="/assets/location.png"
              alt="location"
              className="location-map"
            />
            <div className="hover-btn-wrapper">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/1013+Geylang+East+Ave+3,+03+144,+Singapore+389728/@1.3190356,103.8885599,17z/data=!3m1!4b1!4m5!3m4!1s0x31da18228680cd4d:0xfe0f7e4f3203bfb6!8m2!3d1.3190356!4d103.8907486"
              >
                <button className="hover-btn">View Map</button>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col" style={{ padding: "0 0 0 20px" }}>
          <h4 className="footer-subhead">Contact Details</h4>
          <div className="footer-contact">
            <div className="footer-contact-heading">
              <i className="fas fa-phone-alt" />
              <p className="footer-contact-subhead">Give Us a Call</p>
            </div>

            <p>Tel: +65 6748 0468</p>
            <p>HP: +65 9617 1383</p>
            <p>Fax: +65 6748 1556</p>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-heading">
              <i className="fas fa-envelope" />
              <p
                className="footer-contact-subhead"
                style={{
                  marginTop: "12px",
                }}
              >
                Email Us
              </p>
            </div>
            <p>Sales@oxen.com.sg</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© {year} by Oxen Pte Ltd</p>
    </div>
  );
};

export default Footer;
