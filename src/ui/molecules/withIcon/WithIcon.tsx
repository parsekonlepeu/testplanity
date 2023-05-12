import { FC } from "react";
import "./withIcon.css";

interface WithIconProps {
  Icon: FC;
  posIcon?: "left" | "center";
  width?: string;
}

export const WithIcon: FC<React.PropsWithChildren<WithIconProps>> = ({
  Icon,
  children,
  posIcon = "center",
  width,
}) => {
  return (
    <div
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
        <Icon />
      </div>
      {children}
    </div>
  );
};
