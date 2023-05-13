import { forwardRef } from "react";
import "./displayvalue.css";

interface DisplayValueProps {
  value: number;
  unit: string;
}

export const DisplayValue = forwardRef<HTMLDivElement, DisplayValueProps>(
  ({ value, unit }, ref) => {
    return (
      <div
        ref={ref}
        className="d-v-main"
      >
        <div className="d-v-value">{value}</div>
        <div className="d-v-unit">{unit}</div>
      </div>
    );
  }
);
