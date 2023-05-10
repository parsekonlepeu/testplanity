import { FC } from "react";
import "./displayvalue.css";

interface DisplayValueProps {
  value: number;
  unit: string;
}

export const DisplayValue: FC<DisplayValueProps> = ({ value, unit }) => {
  return (
    <div className="d-v-main">
      <div className="d-v-value">{value}</div>
      <div className="d-v-unit">{unit}</div>
    </div>
  );
};
