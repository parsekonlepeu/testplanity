import type { Meta, StoryObj } from "@storybook/react";
import { Tabbar } from "./Tabbar";

const meta = {
  title: "Test/Templates/Tabbar",
  component: Tabbar,
} satisfies Meta<typeof Tabbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    created: false,
    came: false,
  },
};

export const created_and_came: Story = {
  args: {
    created: true,
    came: true,
  },
};

export const created_and_not_came: Story = {
  args: {
    created: true,
    came: false,
  },
};
