import { FC, useCallback } from "react";
import "./toggleSwitch.css";

interface ToggleSwitchProps {
  onChange?: (value: boolean) => void;
  value?: boolean;
  color?: string;
  disabled?: boolean;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  onChange,
  value,
  disabled = false,
}) => {
  const handleClick = useCallback(() => {
    onChange && onChange(!value);
  }, []);
  return (
    <label className="toggle-switch">
      <input
        id="input-toggle-switch"
        type="checkbox"
        checked={value !== undefined ? value : undefined}
        disabled={disabled}
        onClick={handleClick}
      />
      <span className="toggle-switch-slider" />
    </label>
  );
};
