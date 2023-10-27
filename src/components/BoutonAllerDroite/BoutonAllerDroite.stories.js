import { BoutonAllerDroite } from ".";

export default {
  title: "Components/BoutonAllerDroite",
  component: BoutonAllerDroite,
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
    polygon: "/img/polygon-2-2.svg",
  },
};
