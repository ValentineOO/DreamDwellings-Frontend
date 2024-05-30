import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <div
            className=""
            style={{ color: "#5E70B5", fontWeight: 900, fontSize: "1.5rem" }}
          >
            Dream Dwellings
          </div>
          <span className="secondaryText">
            Our vision is to provide for everyone <br />
            the best place to live.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span
            className="primaryText"
            style={{ color: "#5E70B5",}}
          >
            Information
          </span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
