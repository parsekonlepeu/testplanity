import { forwardRef } from "react"
import "./choicehour.css"

interface ChoiceHourProps {
  hours: number
  minutes: number
}

export const ChoiceHour = forwardRef<HTMLDivElement, ChoiceHourProps>(
  ({ hours, minutes }, ref) => {
    return (
      <div
        ref={ref}
        className="choice-hour-contenair"
      >
        <button className="c-h-hour">{hours}</button>
        <button className="c-h-minute">{minutes}</button>
      </div>
    )
  }
)
