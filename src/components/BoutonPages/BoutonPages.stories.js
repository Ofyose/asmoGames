import { BoutonPages } from ".";

export default {
  title: "Components/BoutonPages",
  component: BoutonPages,
  argTypes: {
    property1: {
      options: ["droite-bleu", "gauche-bleu", "milieu-bleu"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "droite-bleu",
    className: {},
    droite: "/img/droite.svg",
    milieu: "/img/milieu-5.svg",
    gauche: "/img/gauche-5.svg",
  },
};
