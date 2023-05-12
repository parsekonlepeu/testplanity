import { FC } from "react";
import "./info.css";

interface InfoProps {
  label: string;
  text: string;
  onClick: () => void;
}

export const Info: FC<InfoProps> = ({ label, text, onClick }) => {
  return (
    <div
      className="info-contenair"
      onClick={onClick}
    >
      <p className="info-label">{label}</p>
      <p className="text-label">{text}</p>
    </div>
  );
};
