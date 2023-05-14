import type { Meta, StoryObj } from "@storybook/react"
import { ChoiceDate } from "./ChoiceDate"

const meta = {
  title: "Test/Atoms/ChoiceDate",
  component: ChoiceDate,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ChoiceDate>

export default meta
type Story = StoryObj<typeof meta>

export const choiceDate: Story = {
  args: {
    date: "lundi 21 mars",
  },
}
