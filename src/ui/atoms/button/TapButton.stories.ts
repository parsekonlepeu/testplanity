import type { Meta, StoryObj } from "@storybook/react";
import { TapButton } from "./TapButton";

const meta = {
  title: "Test/Atoms/Button",
  component: TapButton,
} satisfies Meta<typeof TapButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    label: "Button",
  },
};

export const Red: Story = {
  args: {
    type: "contained",
    label: "Button",
    backgroundColor: "#F56565",
    labelColor: "white",
  },
};

export const Green: Story = {
  args: {
    type: "contained",
    label: "Button",
    backgroundColor: "#48BB78",
    labelColor: "white",
  },
};

export const Blue: Story = {
  args: {
    type: "contained",
    label: "Button",
    backgroundColor: "#2C5282",
    labelColor: "white",
  },
};
