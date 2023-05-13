import { forwardRef } from "react"
import "./choicedate.css"

interface ChoiceDateProps {
  date: string
}

export const ChoiceDate = forwardRef<HTMLButtonElement, ChoiceDateProps>(
  ({ date }, ref) => {
    return (
      <button
        ref={ref}
        className="choice-date"
      >
        {date}
      </button>
    )
  }
)
