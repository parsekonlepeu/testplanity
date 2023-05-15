import { forwardRef } from "react"
import "./info.css"

interface InfoProps {
  label: string
  text: string
  onClick: () => void
  width?: string
}

export const Info = forwardRef<HTMLDivElement, InfoProps>(
  ({ label, text, onClick, width = "964px" }, ref) => {
    return (
      <div
        className="info-contenair"
        onClick={onClick}
        ref={ref}
        style={{
          width,
        }}
      >
        <p className="info-label">{label}</p>
        <p className="text-label">{text}</p>
      </div>
    )
  }
)
