import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceEmail } from "./ChoiceEmail";

const meta = {
  title: "Test/Molecules/ChoiceEmail",
  component: ChoiceEmail,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ChoiceEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    label: "Email",
    email: "",
    onChange: console.log,
  },
};

export const disabled: Story = {
  args: {
    label: "Email",
    email: "",
    onChange: console.log,
    disabled: true,
  },
};
