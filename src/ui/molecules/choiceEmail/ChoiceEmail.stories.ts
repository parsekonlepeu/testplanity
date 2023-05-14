import type { Meta, StoryObj } from "@storybook/react"
import { ChoiceEmail } from "./ChoiceEmail"

const meta = {
  title: "Test/Molecules/ChoiceEmail",
  component: ChoiceEmail,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ChoiceEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Email",
    email: "",
  },
}

export const disabled: Story = {
  args: {
    label: "Email",
    email: "",
    disabled: true,
  },
}
