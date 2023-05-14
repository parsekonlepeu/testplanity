import type { Meta, StoryObj } from "@storybook/react"
import { ChoicePhoneNumber } from "./ChoicePhoneNumber"

const meta = {
  title: "Test/Molecules/ChoicePhoneNumber",
  component: ChoicePhoneNumber,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ChoicePhoneNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Téléphone",
    number: "",
  },
}

export const disabled: Story = {
  args: {
    label: "Téléphone",
    number: "",
    disabled: true,
  },
}
