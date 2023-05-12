import { FC } from "react";
import "./tapButton.css";
import { useHover } from "../../../utils/hooks/useHover";

type ButtonType = "text" | "contained";

interface TapButtonProps {
  type?: ButtonType;
  label: string;
  labelColor?: string;
  hoverTextColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export const TapButton: FC<TapButtonProps> = ({
  type = "contained",
  labelColor = "#34423E",
  backgroundColor = "#F56565",
  label,
  hoverTextColor = "#48BB78",
  onClick,
}) => {
  const { hover, controls } = useHover();
  return (
    <button
      {...controls}
      type="button"
      className="tap-button"
      style={{
        backgroundColor: type === "contained" ? backgroundColor : "transparent",
        color: hover && type === "text" ? hoverTextColor : labelColor,
        textDecoration: type === "text" ? "underline" : undefined,
        padding: type === "text" ? "0px" : undefined,
        height: type === "text" ? undefined : "36px",
        fontWeight: type === "text" ? 600 : 400,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
