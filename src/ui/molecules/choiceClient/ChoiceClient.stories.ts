import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceClient } from "./ChoiceClient";

const meta = {
  title: "Test/Molecules/ChoiceClient",
  component: ChoiceClient,
} satisfies Meta<typeof ChoiceClient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
    onChange: (name) => console.log("name : ", name),
    alreadyCreated: false,
    nameClient: "",
    label: "Choisir un client",
  },
};

export const load: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
    onChange: (name) => console.log("name : ", name),
    alreadyCreated: false,
    nameClient: "en charchement",
    label: "Choisir un client",
    loading: true,
  },
};

export const validate: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
    onChange: (name) => console.log("name : ", name),
    alreadyCreated: true,
    nameClient: "François Rolet",
    label: "Choisir un client",
  },
};

export const disabled: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
    onChange: (name) => console.log("name : ", name),
    alreadyCreated: false,
    nameClient: "",
    label: "Choisir un client",
    disabled: true,
  },
};
