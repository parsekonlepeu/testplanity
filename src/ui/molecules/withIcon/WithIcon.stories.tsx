import type { Meta, StoryObj } from "@storybook/react";
import { WithIcon } from "./WithIcon";
import {
  MdOutlineCake,
  MdOutlinePerson,
  MdContentCopy,
  MdContentCut,
  MdDelete,
  MdAutorenew,
} from "react-icons/md";
import { ChoiceBirthday } from "../../atoms/choiceBirthday/ChoiceBirthday";
import { ToggleButton } from "../../atoms/toggleButton/ToggleButton";
import { TapButton } from "../../atoms/button/TapButton";

const meta = {
  title: "Test/Molecules/WithIcon",
  component: WithIcon,
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof WithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withChoiceBirthday: Story = {
  args: {
    Icon: MdOutlineCake,
    children: <ChoiceBirthday />,
    posIcon: "left",
  },
};

export const withToggleButton: Story = {
  args: {
    Icon: MdOutlinePerson,
    children: (
      <ToggleButton
        values={["Femme", "Homme", "Enfants"]}
        onChange={console.log}
      />
    ),
    posIcon: "left",
  },
};

export const withText: Story = {
  args: {
    Icon: MdOutlinePerson,
    children: (
      <TapButton
        label="Info client"
        type="text"
      />
    ),
  },
};
