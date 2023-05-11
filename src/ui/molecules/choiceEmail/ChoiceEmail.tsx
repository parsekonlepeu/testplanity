import { FC } from "react";
import { useManageInput } from "../../../utils/hooks/useManageInput";
import { InputAnimate } from "../../atoms/inputAnimate/InputAnimate";
import "./choiceEmail.css";

interface ChoiceEmailProps {
  disabled?: boolean;
  email: string;
  label?: string;
  onChange: (email: string) => void;
}

export const ChoiceEmail: FC<ChoiceEmailProps> = ({
  disabled = false,
  email = "",
  label = "Email",
  onChange,
}) => {
  const { value, focus, functions } = useManageInput(email, onChange);
  return (
    <div
      className="c-e-main"
      style={{
        backgroundColor: disabled ? "#ECEEED" : "white",
        border: focus ? "1px solid #48BB78" : undefined,
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
  );
};