/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BoutonCEstParti = ({ className, overlapGroupClassName, cEstPartiClassName }) => {
  return (
    <div className={`bouton-c-est-parti ${className}`}>
      <div className={`c-EST-PARTI-wrapper ${overlapGroupClassName}`}>
        <div className={`c-EST-PARTI ${cEstPartiClassName}`}>C’EST PARTI&nbsp;&nbsp;!</div>
      </div>
    </div>
  );
};
