import { FC } from "react";
import "./client.css";
import { useAppSelector } from "../../../store/hookTypedredux";
import { ClientMain } from "../clientMain/ClientMain";
import { ClientDown } from "../clientDown/ClientDown";

export const Client: FC = () => {
  const created = useAppSelector((state) => state.appointment.created);
  return (
    <div className="client-container">
      <div className="client-wrapper-icon"></div>
      <ClientMain />
      {created ? <ClientDown /> : null}
    </div>
  );
};
