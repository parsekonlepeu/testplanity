import type { Meta, StoryObj } from "@storybook/react"
import { Presta } from "./Presta"

const meta = {
  title: "Test/molecules/Presta",
  component: Presta,
} satisfies Meta<typeof Presta>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prestation: {
      id: "zz",
      name: "",
      time: 60,
      collaborateur: "",
      price: 60,
    },
    key: "zz",
  },
}

export const Disabled: Story = {
  args: {
    prestation: {
      id: "zz",
      name: "",
      time: 60,
      collaborateur: "",
      price: 60,
    },
    key: "zz",
    disabled: true,
  },
}
