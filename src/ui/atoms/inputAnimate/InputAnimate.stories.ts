import type { Meta, StoryObj } from "@storybook/react"
import { InputAnimate } from "./InputAnimate"

const meta = {
  title: "Test/Atoms/InputAnimate",
  component: InputAnimate,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof InputAnimate>

export default meta
type Story = StoryObj<typeof meta>

export const inputAnimate: Story = {
  args: {
    value: "",
    label: "entrez input",
  },
}

export const inputAnimateValue: Story = {
  args: {
    value: "parsekonlepeu",
    label: "entrez input",
  },
}
