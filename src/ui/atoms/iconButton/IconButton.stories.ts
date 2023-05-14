import type { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "./IconButton"
import { MdDeleteOutline, MdDone } from "react-icons/md"

const meta = {
  title: "Test/Atoms/IconButton",
  component: IconButton,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Delete: Story = {
  args: {
    Icon: MdDeleteOutline,
    hoverColor: "#C53030",
    hoverIconColor: "white",
    hoverBorderColor: "#C53030",
  },
}

export const Done: Story = {
  args: {
    Icon: MdDone,
    backgroudnColor: "#48BB78",
    hoverColor: "#38A169",
    hoverBorderColor: "#38A169",
    hoverIconColor: "white",
    color: "white",
    borderColor: "#48BB78",
    size: 40,
  },
}
