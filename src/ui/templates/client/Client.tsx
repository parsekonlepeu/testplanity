import { FC } from "react";
import { Birthday } from "../../atoms/choiceBirthday/ChoiceBirthday";
import "./client.css";
import { ClientMain } from "../../organisms/clientMain/ClientMain";
import { ClientDown } from "../../organisms/clientDown/ClientDown";
import { CreateClient } from "../../molecules/choiceClient/ChoiceClient";

export type Loyalty = {
  points: number;
  gain: number;
};

interface ClientProps {
  created: boolean;
  infoClient?: string;
  name?: string;
  tel?: string;
  email?: string;
  genre?: string;
  birthday?: Birthday;
  remiderSMS?: boolean;
  marketingSMS?: boolean;
  loyalty?: Loyalty;
  onCreate?: CreateClient;
  onDelete?: () => void;
  onChangeTel?: OnChangeText;
  onChangeName?: OnChangeText;
  onChangeEmail?: OnChangeText;
  loading?: boolean;
  disabled?: boolean;
}

export const Client: FC<ClientProps> = ({
  created = false,
  infoClient = "",
  name = "",
  tel = "",
  email = "",
  genre = "Homme",
  birthday = {
    day: 11,
    month: "Fevr",
  },
  remiderSMS = true,
  marketingSMS = false,
  loyalty = {
    points: 42,
    gain: 10,
  },
  onCreate,
  onDelete,
  onChangeTel,
  onChangeName,
  onChangeEmail,
  loading,
  disabled = false,
}) => {
  return (
    <div className="client-container">
      <div className="client-wrapper-icon"></div>
      <ClientMain
        created={created}
        nameClient={name}
        tel={tel}
        email={email}
        onCreate={onCreate}
        onDelete={onDelete}
        onChangeTel={onChangeTel}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        loading={loading}
        disabled={disabled}
      />
      {created ? (
        <ClientDown
          genre={genre}
          birthday={birthday}
          remiderSMS={remiderSMS}
          marketingSMS={marketingSMS}
          loyalty={loyalty}
          infoClient={infoClient}
        />
      ) : null}
    </div>
  );
};
