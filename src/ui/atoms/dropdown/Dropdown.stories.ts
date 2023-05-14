import type { Meta, StoryObj } from "@storybook/react"
import { Dropdown } from "./Dropdown"
import { LIST_PRESTATIONS } from "../../../utils/constants/prestation"
import { LIST_COLLABORATEUR } from "../../../utils/constants/collaborateur"

const meta = {
  title: "Test/Atoms/Dropdown",
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const prestation: Story = {
  args: {
    label: "Choisir une prestation",
    labelSelect: "prestation",
    listChoice: LIST_PRESTATIONS,
    color: "#48BB78",
  },
}

export const collaborateur: Story = {
  args: {
    label: "Choisir un collaborateur",
    labelSelect: "collaborateur",
    listChoice: LIST_COLLABORATEUR,
    color: "#48BB78",
  },
}

export const disabled: Story = {
  args: {
    label: "Choisir un collaborateur",
    labelSelect: "collaborateur",
    listChoice: LIST_COLLABORATEUR,
    color: "#48BB78",
    disable: true,
  },
}
