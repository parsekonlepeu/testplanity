import type { Meta, StoryObj } from "@storybook/react"
import { ButtonLoad } from "./ButtonLoad"

const meta = {
  title: "Test/Atoms/ButtonLoad",
  component: ButtonLoad,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ButtonLoad>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("parsekonlepeu")
    },
    loading: false,
    disabled: false,
    backgroundColor: "#48BB78",
  },
}

export const load: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("parsekonlepeu")
    },
    loading: true,
    disabled: true,
    backgroundColor: "#48BB78",
  },
}

export const disabled: Story = {
  args: {
    text: "Créer",
    onClick: () => {
      console.log("parsekonlepeu")
    },
    loading: false,
    disabled: true,
    backgroundColor: "#48BB78",
  },
}
