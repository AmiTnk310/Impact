import React from "react";
import "./CarouselDetailBox.css"

const CarouselDetailBox =  () =>{


    return(
        <div className="carousel-cards">
                <div className="img-card">
                    <div className="imgBox">
                            <img id="card-img"src="https://untree.co/demos/impact/images/person_2.jpg" alt="" />
                    </div>
                    <div className="nameBox">
                        <div id="reviwerName">
                            <span>Maria Jones</span>
                        </div>
                        <div id="type">
                            <span>Customer</span>
                        </div>
                    </div>
                    
                </div>
                <div className="text-card">
                        <span>
                        &ldquo; Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. &rdquo;
                        </span>
                </div>
                
        </div>
        
    )
}
export default CarouselDetailBox;