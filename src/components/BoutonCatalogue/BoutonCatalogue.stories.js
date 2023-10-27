import { BoutonCatalogue } from ".";

export default {
  title: "Components/BoutonCatalogue",
  component: BoutonCatalogue,
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
  },
};
