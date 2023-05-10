import { FC } from "react";
import "./tapButton.css";

type ButtonType = "text" | "contained";

interface TapButtonProps {
  type?: ButtonType;
  labelColor?: string;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  Icon?: FC;
}

export const TapButton: FC<TapButtonProps> = ({
  type = "contained",
  labelColor = "white",
  backgroundColor = "#F56565",
  label,
  Icon,
}) => {
  return (
    <button
      type="button"
      className="tap-button"
      style={{
        backgroundColor: type === "contained" ? backgroundColor : "transparent",
        color: type === "contained" ? labelColor : "#34423E",
        textDecoration: type === "text" ? "underline" : undefined,
      }}
    >
      {Icon && (
        <div className="wrapper-icon">
          <Icon />
        </div>
      )}
      {label}
    </button>
  );
};
