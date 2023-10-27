/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BoutonPages = ({
  property1,
  className,
  droite = "/img/droite.svg",
  milieu = "/img/milieu-5.svg",
  gauche = "/img/gauche-5.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "gauche-bleu",
  });

  return (
    <div
      className={`bouton-pages ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <img
        className={`droite ${state.property1}`}
        alt="Droite"
        src={
          state.property1 === "milieu-bleu"
            ? "/img/droite-5.svg"
            : state.property1 === "droite-bleu"
            ? "/img/droite-4.svg"
            : droite
        }
      />
      <img
        className={`milieu property-1-${state.property1}`}
        alt="Milieu"
        src={
          state.property1 === "milieu-bleu"
            ? "/img/milieu-4.svg"
            : state.property1 === "droite-bleu"
            ? "/img/milieu-3.svg"
            : milieu
        }
      />
      <img
        className={`gauche property-1-0-${state.property1}`}
        alt="Gauche"
        src={
          state.property1 === "milieu-bleu"
            ? "/img/gauche-4.svg"
            : state.property1 === "droite-bleu"
            ? "/img/gauche-3.svg"
            : gauche
        }
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "milieu-bleu",
      };
  }

  return state;
}

BoutonPages.propTypes = {
  property1: PropTypes.oneOf(["droite-bleu", "gauche-bleu", "milieu-bleu"]),
  droite: PropTypes.string,
  milieu: PropTypes.string,
  gauche: PropTypes.string,
};
