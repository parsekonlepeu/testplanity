import { FC } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IconButton } from "../../atoms/iconButton/IconButton"
import "./buttonDelete.css"

interface ButtonDeleteProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  size?: number
}

export const ButtonDelete: FC<ButtonDeleteProps> = ({
  onClick,
  disabled = false,
  size = 48,
}) => {
  return (
    <IconButton
      Icon={MdDeleteOutline}
      hoverColor="#C53030"
      hoverIconColor="white"
      onClick={onClick}
      size={size}
      disabled={disabled}
    />
  )
}
