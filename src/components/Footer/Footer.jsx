/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({
  className,
  line = "/img/line-3-1.svg",
  img = "/img/line-4-1.svg",
  iconTwitter = "/img/icon-twitter-1.png",
  iconFacebook = "/img/icon-facebook-1.png",
  iconInstagram = "/img/icon-instagram-1.png",
  logo = "/img/logo-2.png",
}) => {
  return (
    <div className={`footer ${className}`}>
      <img className="line" alt="Line" src={line} />
      <div className="overlap-group">
        <img className="img" alt="Line" src={img} />
        <div className="menu">
          <div className="text-wrapper">CGU</div>
          <div className="remboursements">REMBOURSEMENTS</div>
          <div className="div">CONTACT</div>
          <div className="a-propos">A PROPOS</div>
          <div className="actualit-s">ACTUALITÉS</div>
          <div className="faq">FAQ</div>
          <div className="mes-cr-ations">MES CRÉATIONS</div>
          <div className="configurateur">CONFIGURATEUR</div>
        </div>
      </div>
      <img className="icon-twitter" alt="Icon twitter" src={iconTwitter} />
      <img className="icon-facebook" alt="Icon facebook" src={iconFacebook} />
      <img className="icon-instagram" alt="Icon instagram" src={iconInstagram} />
      <img className="logo" alt="Logo" src={logo} />
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
  iconTwitter: PropTypes.string,
  iconFacebook: PropTypes.string,
  iconInstagram: PropTypes.string,
  logo: PropTypes.string,
};
