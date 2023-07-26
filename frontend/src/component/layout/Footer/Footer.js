import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS Mobile Phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our First Priority</p>

        <p>Copyrights 2023 &copy; GauravRatnaparkhi</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.linkedin.com/in/gaurav-ratnaparkhi-54668122b/">LinkedIn</a>
        <a href="https://github.com/gauravratnaparkhi">GitHub</a>
        <a href="https://www.instagram.com/gaurav_ratnaparkhi_/">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
