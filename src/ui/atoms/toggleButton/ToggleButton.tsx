import { FC, useState, useCallback, useEffect } from "react";
import "./toggleButton.css";

interface ToggleButtonProps {
  select?: string;
  values: string[];
  onChange: (clikedValue: string) => void;
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  values,
  onChange,
  select,
}) => {
  const [valueSelect, setValueSelect] = useState(select ? select : values[0]);
  useEffect(() => {
    select && setValueSelect(select);
  }, [select]);

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
