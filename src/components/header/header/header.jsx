import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
