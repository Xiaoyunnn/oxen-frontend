import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            <img
              src="./assets/website_logo_transparent_background.png"
              alt="logo"
              className="logo"
            />
            OXEN
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/solutions"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Solutions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/products"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/services"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item-contact">
              <NavLink
                exact="true"
                to="/contact"
                id="contact"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
