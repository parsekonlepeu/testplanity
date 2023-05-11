import { FC } from "react";
import { Loader } from "./Loader";

export type ClickButtonLoad = () => void;

interface ButtonLoadProps {
  text: string;
  onClick: ClickButtonLoad;
  loading: boolean;
  disabled: boolean;
  backgroundColor?: string;
  color?: string;
}

export const ButtonLoad: FC<ButtonLoadProps> = ({
  text,
  onClick,
  loading = false,
  disabled,
  backgroundColor = "#48BB78",
  color = "white",
}) => {
  return (
    <button
      id="button-load"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#ECEEED" : backgroundColor,
        color: disabled ? "#7F8C88" : color,
        cursor: disabled ? undefined : "pointer",
      }}
    >
      {text}
      {loading ? (
        <div className="wrapper-loader">
          <Loader color={backgroundColor} />
        </div>
      ) : undefined}
    </button>
  );
};
