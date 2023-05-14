import type { Meta, StoryObj } from "@storybook/react"
import { InfoClient } from "./InfoClient"

const meta = {
  title: "Test/Molecules/InfoClient",
  component: InfoClient,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof InfoClient>

export default meta
type Story = StoryObj<typeof meta>

export const withChoiceBirthday: Story = {
  args: {
    text: "Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad.",
  },
}
