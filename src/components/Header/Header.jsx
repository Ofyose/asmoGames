/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  property1,
  className,
  sourianteConfiante = "/img/souriante-confiante-elegante-jeune-femme-debout-fond-blanc-94160-1.png",
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="overlap">
        <div className="images">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="background" />
            <img className="logo-2" alt="Logo" src="/img/logo-3.png" />
            <img className="souriante-confiante" alt="Souriante confiante" src={sourianteConfiante} />
          </div>
        </div>
        <div className="menu-2">
          <div className="a-propos-2">A PROPOS</div>
          <div className="ACTUALIT-s">ACTUALITÉS</div>
          <div className="text-wrapper-2">FAQ</div>
          <div className="text-wrapper-3">MES CREATIONS</div>
          <div className="text-wrapper-4">CONFIGURATEUR</div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  sourianteConfiante: PropTypes.string,
};
