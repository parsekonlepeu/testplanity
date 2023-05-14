import type { Meta, StoryObj } from "@storybook/react"
import { ToggleSwitch } from "./ToggleSwitch"

const meta = {
  title: "Test/Atoms/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "white" }],
    },
  },
} satisfies Meta<typeof ToggleSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onChange: (value) => console.log(value),
  },
}

export const offDisabled: Story = {
  args: {
    onChange: (value) => console.log(value),
    disabled: true,
  },
}

export const disabled: Story = {
  args: {
    onChange: (value) => console.log(value),
    disabled: true,
    value: true,
  },
}
