import { FC } from "react";
import "./withIcon.css";

interface WithIconProps {
  Icon: FC;
  posIcon?: "left" | "center";
}

export const WithIcon: FC<React.PropsWithChildren<WithIconProps>> = ({
  Icon,
  children,
  posIcon = "center",
}) => {
  return (
    <div className="wrapper-c-b">
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
