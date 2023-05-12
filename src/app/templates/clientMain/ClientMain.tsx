import { FC } from "react";
import "./clientMain.css";
import { ChoiceClient } from "../../../ui/molecules/choiceClient/ChoiceClient";
import { ChoicePhoneNumber } from "../../../ui/molecules/choicePhoneNumber/ChoicePhoneNumber";
import { ChoiceEmail } from "../../../ui/molecules/choiceEmail/ChoiceEmail";
import { ButtonDelete } from "../../../ui/atoms/buttonDelete/ButtonDelete";
import { useControlClientMain } from "../../../utils/hooks/useControlClientMain";
import { useAppSelector } from "../../../store/hookTypedredux";

export const ClientMain: FC = () => {
  const controls = useControlClientMain();
  const nameClient = useAppSelector((state) => state.appointment.nameClient);
  const created = useAppSelector((state) => state.appointment.created);
  const loadingCreate = useAppSelector(
    (state) => state.appointment.loadingCreate
  );
  const tel = useAppSelector((state) => state.appointment.tel);
  const email = useAppSelector((state) => state.appointment.email);
  return (
    <div className="client-main-contenair">
      <ChoiceClient
        onCreate={controls.onCreate}
        onChange={controls.onChangeName}
        nameClient={nameClient}
        loading={loadingCreate}
        alreadyCreated={created}
        width={created ? "324px" : undefined}
      />
      <ChoicePhoneNumber
        label="Téléphone"
        number={tel}
        disabled={!created}
        onChange={controls.onChangeTel}
      />
      <ChoiceEmail
        disabled={!created}
        email={email}
        label="Email"
        onChange={controls.onChangeEmail}
        width={created ? "324px" : undefined}
      />
      {created ? <ButtonDelete onClick={controls.onDelete} /> : null}
    </div>
  );
};
