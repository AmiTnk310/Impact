import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="navbar">
          <div className="Name">
            <a href="#">Impact</a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Menu 1</a>
                  <a href="#">Menu 2</a>

                  <a href="#">Menu 3</a>
                </div>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
