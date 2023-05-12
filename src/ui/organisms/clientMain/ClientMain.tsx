import { FC } from "react";
import "./clientMain.css";
import {
  ChoiceClient,
  CreateClient,
} from "../../molecules/choiceClient/ChoiceClient";
import { ChoicePhoneNumber } from "../../molecules/choicePhoneNumber/ChoicePhoneNumber";
import { ChoiceEmail } from "../../molecules/choiceEmail/ChoiceEmail";
import { ButtonDelete } from "../../atoms/buttonDelete/ButtonDelete";

interface ClientMainProps {
  created?: boolean;
  nameClient?: string;
  tel?: string;
  email?: string;
  onCreate?: CreateClient;
  onDelete?: () => void;
  onChangeTel?: OnChangeText;
  onChangeName?: OnChangeText;
  onChangeEmail?: OnChangeText;
  loading?: boolean;
  disabled?: boolean;
}

export const ClientMain: FC<ClientMainProps> = ({
  created = false,
  nameClient = "",
  tel = "",
  email = "",
  onCreate,
  onDelete,
  onChangeTel,
  onChangeName,
  onChangeEmail,
  loading,
  disabled,
}) => {
  return (
    <div className="client-main-contenair">
      <ChoiceClient
        onCreate={onCreate}
        onChange={onChangeName}
        nameClient={nameClient}
        loading={loading}
        disabled={disabled}
        alreadyCreated={created}
        width={created ? "324px" : undefined}
      />
      <ChoicePhoneNumber
        label="Téléphone"
        number={tel}
        disabled={!created || disabled}
        onChange={onChangeTel}
      />
      <ChoiceEmail
        disabled={!created || disabled}
        email={email}
        label="Email"
        onChange={onChangeEmail}
        width={created ? "324px" : undefined}
      />
      {created ? <ButtonDelete onClick={onDelete} /> : null}
    </div>
  );
};
