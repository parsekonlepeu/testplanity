import type { Meta, StoryObj } from "@storybook/react";
import { ClientDown } from "./ClientDown";

const meta = {
  title: "Test/Organisms/ClientDown",
  component: ClientDown,
} satisfies Meta<typeof ClientDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    genre: "Homme",
    birthday: {
      day: 20,
      month: "Sept",
    },
  },
};
