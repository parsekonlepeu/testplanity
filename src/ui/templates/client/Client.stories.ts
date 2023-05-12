import type { Meta, StoryObj } from "@storybook/react";
import { Client } from "./Client";

const meta = {
  title: "Test/Templates/Client",
  component: Client,
} satisfies Meta<typeof Client>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    created: false,
  },
};

export const created: Story = {
  args: {
    created: true,
    name: "Françcois Rollet",
    tel: "06 00 00 00 00",
    email: "f.rolet@mail.com",
    infoClient:
      "Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad.",
  },
};
