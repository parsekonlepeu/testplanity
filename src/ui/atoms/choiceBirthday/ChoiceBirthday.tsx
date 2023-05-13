import { forwardRef, useCallback } from "react"
import "./choiceBirthday.css"
import { Birthday } from "../../../utils/type"

export interface ChoiceBirthdayprops {
  onChange?: (newBirthday: Birthday) => void
  dayInit?: number
  monthInit?: string
}

export const ChoiceBirthday = forwardRef<HTMLDivElement, ChoiceBirthdayprops>(
  ({ onChange, dayInit = 1, monthInit = "Janvier" }, ref) => {
    const handleChange = useCallback(() => {
      onChange
    }, [])
    return (
      <div
        ref={ref}
        className="c-b-contenair"
      >
        <button
          className="c-b-day"
          onClick={handleChange}
        >
          {dayInit}
        </button>
        <button className="c-b-month">{monthInit}</button>
      </div>
    )
  }
)
