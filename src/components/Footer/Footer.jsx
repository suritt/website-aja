import React from "react";
import "./Footer.css";

import Facebooklogo  from "./../../logos/Facebook.png";
import Instagramlogo  from "./../../logos/Instagram.png";
import Youtubelogo  from "./../../logos/Youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2> </h2>
              </div>
              <p>
                
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Seguinos en</h2>
              </div>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://www.youtube.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                  <img src={Youtubelogo} alt="youtube Logo"      
                    style={{
                        marginRight: "10px",
                        width: "25px",
                      }} 
                  />  
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="/developers" rel="noreferrer">

                  <img src={Facebooklogo} alt="youtube Logo"      
                    style={{
                        marginRight: "10px",
                        width: "25px",
                      }} 
                  />
                    Facebook
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    
                    <img src={Instagramlogo} alt="Instagram Logo"      
                    style={{
                        marginRight: "10px",
                        width: "25px",
                      }} 
                  />
                    Instagram
                  </a>
                </li>
                {/* <li>
                  <a href="#">Light Speed Zone</a>
                </li>
                <li>
                  <a href="#">Content Delivery Network</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>More Information</h2>
              </div>
              <ul className="footer-list">
                <li>
                  Email:{" "}
                  <a href="mailto:cl.cwph@lnmiit.ac.in">cl.cwph@lnmiit.ac.in</a>
                </li>
                {/* <li>
                  Support: <a href="#">support@company.com</a>
                </li> */}
                <li>
                  Website: <a href="/">cwph-lnmiit.vercel.app</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sub-footer">
              <p>
                Copyright &copy; 2023 Sur-IT <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
