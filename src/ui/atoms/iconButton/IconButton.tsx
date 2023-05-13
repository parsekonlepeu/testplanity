import { forwardRef, FC } from "react"
import { useHover } from "../../../utils/hooks/useHover"
import "./iconbutton.css"

interface IconButtonProps {
  Icon: FC<{ size: number }>
  size?: number
  backgroudnColor?: string
  color?: string
  borderColor?: string
  hoverBorderColor?: string
  hoverColor?: string
  hoverIconColor?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      Icon,
      size = 48,
      backgroudnColor = "white",
      color = "#34423E",
      borderColor = "#34423E",
      hoverBorderColor,
      hoverColor,
      hoverIconColor,
      onClick,
      disabled,
    },
    ref
  ) => {
    const { hover, controls } = useHover()
    return (
      <button
        {...controls}
        disabled={disabled}
        onClick={onClick}
        className="icon-button"
        ref={ref}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          backgroundColor: hover ? hoverColor : backgroudnColor,
          color: hover ? hoverIconColor : color,
          border: hover
            ? hoverBorderColor && `1px solid ${hoverBorderColor}`
            : `1px solid ${borderColor}`,
        }}
      >
        <Icon size={size / 2.1} />
      </button>
    )
  }
)
