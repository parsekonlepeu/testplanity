import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLoad } from "./ButtonLoad";

const meta = {
  title: "Test/Atoms/ButtonLoad",
  component: ButtonLoad,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonLoad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("click");
      return true;
    },
    loading: false,
    disabled: false,
    backgroundColor: "#48BB78",
  },
};

export const load: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("click");
      return true;
    },
    loading: true,
    disabled: true,
    backgroundColor: "#48BB78",
  },
};

export const disabled: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("click");
      return true;
    },
    loading: false,
    disabled: true,
    backgroundColor: "#48BB78",
  },
};
