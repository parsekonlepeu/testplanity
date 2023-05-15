import { FC, forwardRef } from "react"
import { InputAnimate } from "../../atoms/inputAnimate/InputAnimate"
import { useManageInput } from "../../../utils/hooks/useManageInput"
import { MdArrowDropDown } from "react-icons/md"
import "./choicenumberPhone.css"
import { OnChangeText } from "../../../utils/type"

interface ChoicePhoneNumberProps {
  label?: string
  number?: string
  disabled?: boolean
  onChange?: OnChangeText
  width?: string
}

export const ChoicePhoneNumber = forwardRef<
  HTMLInputElement,
  ChoicePhoneNumberProps
>(
  (
    {
      label = "Téléphone",
      number = "",
      disabled = false,
      onChange,
      width = "240px",
    },
    ref
  ) => {
    const { value, focus, functions } = useManageInput(number, onChange)
    return (
      <div
        ref={ref}
        className="wrapper-c-p-n"
        style={{
          backgroundColor: disabled ? "#ECEEED" : "white",
          border: focus ? "1px solid #48BB78" : undefined,
          width: width,
        }}
      >
        <div className="c-p-n-pays">
          <Flag />
          <MdArrowDropDown />
        </div>
        <InputAnimate
          {...functions}
          value={value}
          label={label}
          type="tel"
          disabled={disabled}
        />
      </div>
    )
  }
)

const Flag: FC = () => {
  return (
    <div className="flag">
      <div className="flag-bleu" />
      <div className="flag-white" />
      <div className="flag-red" />
    </div>
  )
}
