import { FC, forwardRef } from "react"
import "./info.css"

interface InfoProps {
  label: string
  text: string
  onClick: () => void
}

export const Info = forwardRef<HTMLDivElement, InfoProps>(
  ({ label, text, onClick }, ref) => {
    return (
      <div
        className="info-contenair"
        onClick={onClick}
        ref={ref}
      >
        <p className="info-label">{label}</p>
        <p className="text-label">{text}</p>
      </div>
    )
  }
)
