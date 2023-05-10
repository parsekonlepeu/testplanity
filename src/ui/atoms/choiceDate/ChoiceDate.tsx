import { FC } from "react";
import "./choicedate.css";

interface ChoiceDateProps {
  date: string;
}

export const ChoiceDate: FC<ChoiceDateProps> = ({ date }) => {
  return <button className="choice-date">{date}</button>;
};
