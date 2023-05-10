import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceHour } from "./ChoiceHour";

const meta = {
  title: "Test/Atoms/ChoiceHour",
  component: ChoiceHour,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ChoiceHour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const choicehour: Story = {
  args: {
    hours: 14,
    minutes: 30,
  },
};
