import { forwardRef, useCallback } from "react"
import "./toggleSwitch.css"

interface ToggleSwitchProps {
  onChange?: (value: boolean) => void
  value?: boolean
  color?: string
  disabled?: boolean
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ onChange, value, disabled = false }, ref) => {
    const handleClick = useCallback(() => {
      onChange && onChange(!value)
    }, [])
    return (
      <label className="toggle-switch">
        <input
          ref={ref}
          id="input-toggle-switch"
          type="checkbox"
          defaultChecked={value !== undefined ? value : undefined}
          disabled={disabled}
          onClick={handleClick}
        />
        <span className="toggle-switch-slider" />
      </label>
    )
  }
)
