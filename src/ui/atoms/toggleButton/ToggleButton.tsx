import { useState, useCallback, useEffect, forwardRef } from "react"
import "./toggleButton.css"

interface ToggleButtonProps {
  select?: string
  values: string[]
  onChange: (clikedValue: string) => void
}

export const ToggleButton = forwardRef<HTMLDivElement, ToggleButtonProps>(
  ({ values, onChange, select }, ref) => {
    const [valueSelect, setValueSelect] = useState(select ? select : values[0])
    useEffect(() => {
      select && setValueSelect(select)
    }, [select])

    return (
      <div
        className="t-b-container"
        ref={ref}
      >
        {values.map((value) => {
          const handleClick: React.MouseEventHandler<HTMLButtonElement> =
            useCallback(() => {
              setValueSelect(value)
              onChange(value)
            }, [])
          const isSelect = valueSelect === value
          const [focus, setFocus] = useState(false)
          return (
            <button
              key={value}
              className="t-b-button"
              style={{
                backgroundColor: isSelect ? "white" : "#F6F7F8",
                color: isSelect || focus ? "#34423E" : "#7F8C88",
              }}
              onClick={handleClick}
              value={value}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            >
              {value}
            </button>
          )
        })}
      </div>
    )
  }
)
