import React from "react";
import "../styles/Footer.css";
import { UilInstagram, UilTwitter, UilYoutube } from "@iconscout/react-unicons";
import AppStore from "../imgs/AppStore.png";
import OnPlay from "../imgs/OnPlay.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-flexer">
        <div className="row1">
          <div className="footer-header">Company</div>
          <div>About</div>
          <div>Careers</div>
          <div>Contact Us</div>
        </div>
        <div className="row2">
          <div className="footer-header">Support</div>
          <div>Help Center</div>
          <div>Safety Center</div>
        </div>
        <div className="row3">
          <div className="footer-header">Legal</div>
          <div>Cookies Policy</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Dispute resolution</div>
        </div>
        <div className="row4">
          <div className="footer-header">Install App</div>
          <div>
            <img className="OnPlay" src={OnPlay} alt="Play store" />
          </div>
          <div>
            <img className="Appstore" src={AppStore} alt="App Store" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-footer">
        <div>@2021 LILIES, All rights reserved</div>
        <div className="footer-socials">
          <span>
            <UilInstagram />
          </span>
          <span>
            <UilTwitter />
          </span>
          <span>
            <UilYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
