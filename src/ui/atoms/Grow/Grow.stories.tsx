import { createRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Grow } from "./Grow"
import "../Grow/grow.css"

const meta = {
  title: "Test/Atoms/Grow",
  component: Grow,
} satisfies Meta<typeof Grow>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {
  render: (args) => {
    return (
      <div className="">
        <Grow {...args}>
          <div
            style={{
              height: "600px",
              width: "800px",
              backgroundColor: "blueviolet",
            }}
          ></div>
        </Grow>
      </div>
    )
  },
  args: {
    duration: 400,
    isin: true,
  },
}
