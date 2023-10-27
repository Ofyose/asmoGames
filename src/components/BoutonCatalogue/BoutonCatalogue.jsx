/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BoutonCatalogue = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`bouton-catalogue ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="catalogue">CATALOGUE</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "hover",
      };
  }

  return state;
}

BoutonCatalogue.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};
