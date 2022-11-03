import React from "react";
import "./Carousel.css"
import CarouselDetailBox from "./CarouselDetailBox";

const Carousel = () => {
  return (
    <div className="mainContainer-carousel">
        <div className="container-carousel">
              <div className="leftArrow">
                <span>&lt;</span>

              </div>
              <div className="main-carousel-box">
                <div className="carousel-details">
                  <CarouselDetailBox/>

                </div>
                <div className="carousel-indicator">
                &bull;	&bull;	&bull;	
                </div>

              </div>
              <div className="rightArrow">
                <span id="rightArrow"> &gt;</span>

              </div>
        </div>
    </div>
  );
};

export default Carousel;
