import type { Meta, StoryObj } from "@storybook/react"
import { ChoiceClient } from "./ChoiceClient"

const meta = {
  title: "Test/Molecules/ChoiceClient",
  component: ChoiceClient,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "white" }],
    },
  },
} satisfies Meta<typeof ChoiceClient>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alreadyCreated: false,
    nameClient: "",
    label: "Choisir un client",
  },
}

export const load: Story = {
  args: {
    alreadyCreated: false,
    nameClient: "en charchement",
    label: "Choisir un client",
    loading: true,
  },
}

export const validate: Story = {
  args: {
    alreadyCreated: true,
    nameClient: "François Rolet",
    label: "Choisir un client",
  },
}

export const disabled: Story = {
  args: {
    alreadyCreated: false,
    nameClient: "",
    label: "Choisir un client",
    disabled: true,
  },
}
