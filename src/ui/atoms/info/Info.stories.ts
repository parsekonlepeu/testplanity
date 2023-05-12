import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "./Info";

const meta = {
  title: "Test/Atoms/Info",
  component: Info,
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    text: "Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad.",
    label: "entrez input",
  },
};
