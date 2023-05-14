import type { Meta, StoryObj } from "@storybook/react"
import { ToggleButton } from "./ToggleButton"

const meta = {
  title: "Test/Atoms/ToggleButton",
  component: ToggleButton,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeButton: Story = {
  args: {
    values: ["Homme", "Femme", "Enfants"],
  },
}
