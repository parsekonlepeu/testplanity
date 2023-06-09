import { forwardRef } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IconButton } from "../../atoms/iconButton/IconButton"
import "./buttonDelete.css"

interface ButtonDeleteProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  size?: number
}

export const ButtonDelete = forwardRef<HTMLButtonElement, ButtonDeleteProps>(
  ({ onClick, disabled = false, size = 48 }, ref) => {
    return (
      <IconButton
        ref={ref}
        Icon={MdDeleteOutline}
        hoverColor="#C53030"
        hoverIconColor="white"
        onClick={onClick}
        size={size}
        disabled={disabled}
      />
    )
  }
)
