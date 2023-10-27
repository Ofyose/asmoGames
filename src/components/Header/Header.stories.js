import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    sourianteConfiante: "/img/souriante-confiante-elegante-jeune-femme-debout-fond-blanc-94160-1.png",
  },
};
