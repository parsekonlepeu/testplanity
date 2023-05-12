import { FC, useCallback } from "react";
import "./choiceBirthday.css";
import { Birthday } from "../../../utils/type";

export interface ChoiceBirthdayprops {
  onChange?: (newBirthday: Birthday) => void;
  dayInit?: number;
  monthInit?: string;
}

export const ChoiceBirthday: FC<ChoiceBirthdayprops> = ({
  onChange,
  dayInit = 1,
  monthInit = "Janvier",
}) => {
  const handleChange = useCallback(() => {
    onChange;
  }, []);
  return (
    <div className="c-b-contenair">
      <button
        className="c-b-day"
        onClick={handleChange}
      >
        {dayInit}
      </button>
      <button className="c-b-month">{monthInit}</button>
    </div>
  );
};
