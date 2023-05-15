import { forwardRef } from "react"
import "./inputAnimate.css"

interface InputAnimateProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  value?: string
  label: string
  type?: React.HTMLInputTypeAttribute
  disabled?: boolean
}

export const InputAnimate = forwardRef<HTMLInputElement, InputAnimateProps>(
  (
    {
      onChange,
      onFocus,
      onBlur,
      value = "",
      label,
      type = "text",
      disabled = false,
    },
    ref
  ) => {
    return (
      <div className="main-inp-anim">
        <input
          ref={ref}
          type={type}
          id="inp-anim"
          placeholder="&nbsp;"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
        />
        <span className="label-inp-anim">{label}</span>
      </div>
    )
  }
)
