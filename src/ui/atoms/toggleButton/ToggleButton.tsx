import { FC, useState, useCallback } from "react";
import "./toggleButton.css";

interface ToggleButtonProps {
  values: string[];
  onChange: (clikedValue: string) => void;
}

export const ToggleButton: FC<ToggleButtonProps> = ({ values, onChange }) => {
  const [valueSelect, setValueSelect] = useState(values[0]);
  return (
    <div className="t-b-container">
      {values.map((value, index) => {
        const handleClick: React.MouseEventHandler<HTMLButtonElement> =
          useCallback(() => {
            setValueSelect(value);
            onChange(value);
          }, []);
        const isSelect = valueSelect === value;
        return (
          <button
            key={value}
            className="t-b-button"
            style={{
              backgroundColor: isSelect ? "white" : "#F6F7F8",
              borderLeft: index !== 0 ? "1px #ECEEED solid" : undefined,
              color: isSelect ? "#34423E" : "#7F8C88",
            }}
            onClick={handleClick}
            value={value}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};
