import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta = {
  title: "Test/Atoms/ToggleButton",
  component: ToggleButton,
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    values: ["Homme", "Femme", "Enfants"],
  },
};
