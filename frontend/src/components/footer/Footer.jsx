import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <NavLink to="/about">
          <p>About IntimateCode</p>
        </NavLink>
      </div>
      <div className="footer-section">
        <NavLink to="/dsgvo">
          <p>Data protection and security, legal notice</p>
        </NavLink>
      </div>
      <div className="footer-section">
        <p>© 2024 Intimate Code. All rights reserved.</p>
      </div>
    </div>
  );
}
