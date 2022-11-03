import React from "react";
import "./Footer.css"

const Footer =()=>{
    return(
        <div className="mainContainer-Footer">
        <div className="container-Footer">
            <div className="Footer-details">
                <div className="about">
                <div className="about-heading">
                            <span>About Impact</span>
                    </div>
                    <div className="about-text">
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                    </div>
                    <div className="social-links">
                        <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        </div>
                        <div className="social-icons">
                                <a href="#"><i className="fa-solid fa-phone"></i></a>
                        </div>

                    </div>
                </div>
                <div className="links">
                
                        <div className="Website-links">
                            <div className="about-headings">
                                <span>Links</span>
                            </div>
                            <div className="links-list">
                                    <ul id="List">
                                    <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Carrers</a></li>
                                        <li><a href="#">Contact</a></li>
                                        
                                    </ul>
                            </div>
                        </div>
                        <div className="Website-links">
                            <div className="about-headings">
                                <span>Company</span>
                            </div>
                            <div className="links-list">
                                    <ul id="List">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Carrers</a></li>
                                        <li><a href="#">Contact</a></li>
                                        
                                    </ul>
                            </div>
                        </div>
                        <div className="Website-links">
                            <div className="about-headings">
                                <span>Company</span>
                            </div>
                            <div className="links-list">
                                    <ul id="List">
                                        <li><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
                                        <li><a href="#">+1(123)-456-7890</a></li>
                                        <li><a href="#">+1(123)-456-7890</a></li>
                                        <li><a href="#">info@mydomain.com</a></li>
                                       
                                        
                                    </ul>
                            </div>
                        </div>
                        

                </div>
            </div>
            <div className="copyright">
                    Copyright ©2022. All Rights Reserved. — Designed with love by  
                    <a href="#">&nbsp; Untree.co</a>
            </div>
           
       
      </div>
    </div>
    )
}


export default Footer;