import React from "react";
import img1 from "../imgg/persons1.png";
import img2 from "../imgg/persons2.png";

const HomePage = () => {
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
        {/* body1 */}
        <div className="container">
          <div className="body1">
            <div className="grp-img">
              <div className="img">
                <img src={img1} alt="" style={{}} />
              </div>
            </div>
            <div className="body-text">
              <div className="heading">
                <span>Let's Grow your business with us.</span>
              </div>
              <div className="desc">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error in similique molestias atque veniam ipsam quibusdam
                  minus incidunt consequatur, eos voluptatem! Dolor, nulla
                  repellat maxime quibusdam iste accusamus ad in?
                </span>
              </div>
              <div className="get-in-touch">
                <button id="btn1">Get in Touch</button>
              </div>
            </div>
            <div className="grp-img">
              <div className="img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* bottom-box */}
        <div className="container">
          <div className="bottom-box">
            <div className="box">
              <div className="box-icon">
                {/* <span><i class="fa-solid fa-layer-group"></i></span> */}

              </div>
              <div className="box-details">
                <h1>Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium, tempora consectetur asperiores assumenda officiis</p>

              </div>
            </div>
            {/* <div className="box">
              <div className="box-icon"></div>
              <div className="box-details"></div>
            </div>
            <div className="box">
              <div className="box-icon"></div>
              <div className="box-details"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
