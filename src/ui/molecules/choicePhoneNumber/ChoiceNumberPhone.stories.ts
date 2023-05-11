import type { Meta, StoryObj } from "@storybook/react";
import { ChoicePhoneNumber } from "./ChoicePhoneNumber";

const meta = {
  title: "Test/Molecules/ChoicePhoneNumber",
  component: ChoicePhoneNumber,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ChoicePhoneNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    label: "Téléphone",
    number: "",
    onChange: console.log,
  },
};

export const disabled: Story = {
  args: {
    label: "Téléphone",
    number: "",
    onChange: console.log,
    disabled: true,
  },
};
