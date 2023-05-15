import { forwardRef } from "react"
import { useManageInput } from "../../../utils/hooks/useManageInput"
import { InputAnimate } from "../../atoms/inputAnimate/InputAnimate"
import "./choiceEmail.css"
import { OnChangeText } from "../../../utils/type"

interface ChoiceEmailProps {
  disabled?: boolean
  email?: string
  label?: string
  onChange?: OnChangeText
  width?: string
}

export const ChoiceEmail = forwardRef<HTMLInputElement, ChoiceEmailProps>(
  ({
    disabled = false,
    email = "",
    label = "Email",
    onChange,
    width = "356px",
  }) => {
    const { value, focus, functions } = useManageInput(email, onChange)
    return (
      <div
        className="c-e-main"
        style={{
          backgroundColor: disabled ? "#ECEEED" : "white",
          border: focus ? "1px solid #48BB78" : undefined,
          width: width,
        }}
      >
        <InputAnimate
          {...functions}
          value={value}
          label={label}
          type="email"
          disabled={disabled}
        />
      </div>
    )
  }
)
