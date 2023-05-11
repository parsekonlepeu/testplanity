import { FC, useCallback, useState } from "react";
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
  Icon?: FC;
}

export const TapButton: FC<TapButtonProps> = ({
  type = "contained",
  labelColor = "#34423E",
  backgroundColor = "#F56565",
  label,
  Icon,
  hoverTextColor = "#48BB78",
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
