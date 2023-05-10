import { FC } from "react";
import "./choicehour.css";

interface ChoiceHourProps {
  hours: number;
  minutes: number;
}

export const ChoiceHour: FC<ChoiceHourProps> = ({ hours, minutes }) => {
  return (
    <div className="choice-hour-contenair">
      <button className="c-h-hour">{hours}</button>
      <button className="c-h-minute">{minutes}</button>
    </div>
  );
};
