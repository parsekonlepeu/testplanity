import type { Meta, StoryObj } from "@storybook/react";
import { ClientMain } from "./ClientMain";

const meta = {
  title: "Test/Organisms/ClientMain",
  component: ClientMain,
} satisfies Meta<typeof ClientMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
  },
};

export const created: Story = {
  args: {
    onCreate: (name) => console.log("name created : ", name),
    created: true,
    tel: "06 00 00 00 00",
    email: "f.rolet@MdReportGmailerrorred.com",
    nameClient: "François Rollet",
  },
};
