import type { Meta, StoryObj } from "@storybook/react";
import { DisplayValue } from "./DisplayValue";

const meta = {
  title: "Test/Atoms/DisplayValue",
  component: DisplayValue,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DisplayValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const displayMinute: Story = {
  args: {
    value: 60,
    unit: "Min",
  },
};

export const displayEuro: Story = {
  args: {
    value: 60,
    unit: "€",
  },
};
