import type { Meta, StoryObj } from "@storybook/react";
import {
  MdContentCopy,
  MdContentCut,
  MdDelete,
  MdAutorenew,
} from "react-icons/md";
import { TapButton } from "./TapButton";

const meta = {
  title: "Test/Atoms/Button",
  component: TapButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
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
  },
};

export const Green: Story = {
  args: {
    type: "contained",
    label: "Button",
    backgroundColor: "#48BB78",
  },
};

export const Blue: Story = {
  args: {
    type: "contained",
    label: "Button",
    backgroundColor: "#2C5282",
  },
};

export const WithIconCopy: Story = {
  args: {
    type: "text",
    label: "Copier",
    Icon: MdContentCopy,
  },
};

export const WithIconCut: Story = {
  args: {
    type: "text",
    label: "Couper",
    Icon: MdContentCut,
  },
};

export const WithIconDelete: Story = {
  args: {
    type: "text",
    label: "Supprimer",
    Icon: MdDelete,
  },
};

export const Refresh: Story = {
  args: {
    type: "text",
    label: "Refresh",
    Icon: MdAutorenew,
    labelColor: "#48BB78",
  },
};
