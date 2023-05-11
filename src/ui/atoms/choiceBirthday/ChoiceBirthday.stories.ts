import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceBirthday } from "./ChoiceBirthday";

const meta = {
  title: "Test/Atoms/ChoiceBirthday",
  component: ChoiceBirthday,
} satisfies Meta<typeof ChoiceBirthday>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    dayInit: 20,
    monthInit: "Sept",
  },
};
