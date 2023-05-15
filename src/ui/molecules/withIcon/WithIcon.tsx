import { FC, forwardRef } from "react"
import "./withIcon.css"

interface WithIconProps {
  Icon: FC<{ size: number; color: string }>
  posIcon?: "left" | "center"
  width?: string
  iconColor?: string
}

export const WithIcon = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<WithIconProps>
>(
  (
    { Icon, children, posIcon = "center", width, iconColor = "#5F706A" },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="wrapper-c-b"
        style={{
          width: width ? width : undefined,
        }}
      >
        <div
          className="c-b-icon-wrapper"
          style={{
            justifyContent: posIcon === "center" ? "center" : "flex-start",
          }}
        >
          <Icon
            size={15}
            color={iconColor}
          />
        </div>
        {children}
      </div>
    )
  }
)
