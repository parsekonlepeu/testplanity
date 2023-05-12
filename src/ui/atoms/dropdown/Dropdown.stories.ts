import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Test/Atoms/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const prestation: Story = {
  args: {
    label: "Choisir une prestation",
    labelSelect: "prestation",
    listChoice: [
      { name: "Coupe homme (cheveux courts)" },
      { name: "Coupe homme (cheveux longs)" },
      {
        name: "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux longs & épais)",
      },
      {
        name: "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux cours & fin)",
      },
      { name: "le cinquième élément !!" },
    ],
    onChange: (choice) => console.log(choice),
    color: "#48BB78",
  },
};

export const collaborateur: Story = {
  args: {
    label: "Choisir un collaborateur",
    labelSelect: "collaborateur",
    listChoice: [
      { name: "Jean-Michel" },
      { name: "Juliette" },
      {
        name: "Denis",
      },
      {
        name: "Denis",
      },
      { name: "le cinquième élément !!" },
    ],
    onChange: (choice) => console.log(choice),
    color: "#48BB78",
  },
};
