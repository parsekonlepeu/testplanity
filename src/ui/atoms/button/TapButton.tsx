import { forwardRef } from "react"
import "./tapButton.css"
import { useHover } from "../../../utils/hooks/useHover"

type ButtonType = "text" | "contained"

interface TapButtonProps {
  type?: ButtonType
  label: string
  labelColor?: string
  hoverTextColor?: string
  backgroundColor?: string
  onClick?: () => void
  padding?: number
}

export const TapButton = forwardRef<HTMLButtonElement, TapButtonProps>(
  (
    {
      type = "contained",
      labelColor = "#34423E",
      backgroundColor = "#F56565",
      label,
      hoverTextColor = "#48BB78",
      onClick,
      padding = 10,
    },
    ref
  ) => {
    const { hover, controls } = useHover()
    return (
      <button
        ref={ref}
        {...controls}
        type="button"
        className="tap-button"
        style={{
          backgroundColor:
            type === "contained" ? backgroundColor : "transparent",
          color: hover && type === "text" ? hoverTextColor : labelColor,
          textDecoration: type === "text" ? "underline" : undefined,
          padding: padding,
          height: type === "text" ? undefined : "36px",
          fontWeight: type === "text" ? 600 : 400,
        }}
        onClick={onClick}
      >
        {label}
      </button>
    )
  }
)
