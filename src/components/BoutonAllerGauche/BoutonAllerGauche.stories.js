import { BoutonAllerGauche } from ".";

export default {
  title: "Components/BoutonAllerGauche",
  component: BoutonAllerGauche,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    polygon: "/img/polygon-1-2.svg",
  },
};
