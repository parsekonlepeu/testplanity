import type { Meta, StoryObj } from "@storybook/react"
import { ButtonDelete } from "./ButtonDelete"

const meta = {
  title: "Test/Molecules/ButtonDelete",
  component: ButtonDelete,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ButtonDelete>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {
  args: {},
}

export const small: Story = {
  args: {
    size: 24,
  },
}

export const big: Story = {
  args: {
    size: 64,
  },
}

export const disabled: Story = {
  args: {
    disabled: true,
  },
}
