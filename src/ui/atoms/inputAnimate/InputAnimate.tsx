import { FC } from "react";
import "./inputAnimate.css";

interface InputAnimateProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
}

export const InputAnimate: FC<InputAnimateProps> = ({
  onChange,
  onFocus,
  onBlur,
  value = "",
  label,
  type = "text",
  disabled = false,
}) => {
  return (
    <div
      className="main-choiceclient"
      style={
        {
          // backgroundColor: disabled ? "red" : undefined,
        }
      }
    >
      <input
        type={type}
        id="choiceclient"
        placeholder="&nbsp;"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
      />
      <span className="label-choice-client">{label}</span>
    </div>
  );
};
