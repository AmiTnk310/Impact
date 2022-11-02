import React from "react";
import "./Sec3.css";
import img from "../../../imgg/illustration.png";

const Sec3 = () => {
  const vid = "https://www.youtube.com/embed/tgbNymZ7vqY";

  return (
    <div className="mainContainer-Sec3">
      <div className="container-Sec3">
        <div className="Sec3-box">
          <div className="Sec3-textBox">
            <div className="Sec3-heading">
              <p id="Sec3-title">Why Growing Your Buisness is Important</p>
              <span id="Sec3-heading-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos nostrum explicabo, optio ipsam voluptatem laborum
                sunt laboriosam ea rerum error dictasasaas tenetur aspernatur
                repellendus aut nihil
              </span>
            </div>
            <div className="Sec3-btn">
              <button id="Sec3-btn">Learn more</button>
            </div>
          </div>
          <div className="Sec3-imgBox">
            <img src={img} alt="" id="Sec3-img" />
          </div>
        </div>
        <div className="Sec3-info">
          <div className="info-category">
            <div className="info-category-icon">icon</div>
            <div className="info-category-text">
              <span id="info-category-heading">Professional</span> <br />
              <span id="info-text">
                Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Sint, odio!dolor sit amet consectetur adipisicing elit.
                Quibusdam, eius ex rerum porro nemo dolorem!
              </span>
            </div>
          </div>
          <div className="info-category">
            <div className="info-category-icon">icon</div>
            <div className="info-category-text">
              <span id="info-category-heading">Good Review</span> <br />
              <span id="info-text">
                Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Sint, odio!dolor sit amet consectetur adipisicing elit.
                Quibusdam, eius ex rerum porro nemo dolorem!
              </span>
            </div>
          </div>
          <div className="info-category">
            <div className="info-category-icon">icon</div>
            <div className="info-category-text">
              <span id="info-category-heading">24/7 Support</span> <br />
              <span id="info-text">
                Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Sint, odio!dolor sit amet consectetur adipisicing elit.
                Quibusdam, eius ex rerum porro nemo dolorem!
              </span>
            </div>
          </div>
        </div>

        <div className="Sec3-video-info">
          <div className="video">
            <iframe src={vid}></iframe>
          </div>
          <div className="video-info-text">
            <div className="video-info-tech-heading">
              Get Started with Impact
            </div>
            <div id="video-text">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet.
              </p>
              <ul>
                <li>
                  <span style={{ color: "rgb(248,90,64)" }}>&#10004; </span>
                  &nbsp; Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <span style={{ color: "rgb(248,90,64)" }}>&#10004;</span>
                  &nbsp; amet consectetur adipisicing elit. Numquam
                </li>
                <li>
                  <span style={{ color: "rgb(248,90,64)" }}>&#10004;</span>
                  &nbsp; Lorem, ipsum dolor sabha.
                </li>
                <li>
                  <span style={{ color: "rgb(248,90,64)" }}>&#10004;</span>
                  &nbsp; Adsd dolordn hssah.
                </li>
                <li>
                  <span style={{ color: "rgb(248,90,64)" }}>&#10004;</span>
                  &nbsp; praesentium voluptatum, dolore
                </li>
              </ul>
              <button id="Sec3-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec3;
