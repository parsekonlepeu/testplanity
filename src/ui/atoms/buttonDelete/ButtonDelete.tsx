import { FC } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { useHover } from "../../../utils/hooks/useHover"
import "./buttonDelete.css"

interface ButtonDeleteProps {
  onClick?: () => void
  disabled?: boolean
  size?: number
}

export const ButtonDelete: FC<ButtonDeleteProps> = ({
  onClick,
  disabled = false,
  size = 48,
}) => {
  const { hover, controls } = useHover()
  return (
    <button
      {...controls}
      disabled={disabled}
      className="button-delete"
      onClick={onClick}
      style={{
        backgroundColor: hover ? "#C53030" : "white",
        height: `${size}px`,
        width: `${size}px`,
        color: hover ? "white" : undefined,
      }}
    >
      <MdDeleteOutline size={size / 2.3} />
    </button>
  )
}
