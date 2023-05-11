import { FC } from "react";
import { InputAnimate } from "../../atoms/inputAnimate/InputAnimate";
import { useManageInput } from "../../../utils/hooks/useManageInput";
import { MdArrowDropDown } from "react-icons/md";
import "./choicenumberPhone.css";

interface ChoicePhoneNumberProps {
  label: string;
  number: string;
  disabled?: boolean;
  onChange: (number: string) => void;
}

export const ChoicePhoneNumber: FC<ChoicePhoneNumberProps> = ({
  label,
  number,
  disabled = false,
  onChange,
}) => {
  const { value, focus, functions } = useManageInput(number, onChange);
  return (
    <div
      className="wrapper-c-p-n"
      style={{
        backgroundColor: disabled ? "#ECEEED" : "white",
        border: focus ? "1px solid #48BB78" : undefined,
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
  );
};

const Flag: FC = () => {
  return (
    <div className="flag">
      <div className="flag-bleu" />
      <div className="flag-white" />
      <div className="flag-red" />
    </div>
  );
};
