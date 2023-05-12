import { FC } from "react";
import { WithIcon } from "../../molecules/withIcon/WithIcon";
import {
  MdOutlineCake,
  MdOutlinePerson,
  MdContentCopy,
  MdCardMembership,
} from "react-icons/md";
import {
  Birthday,
  ChoiceBirthday,
} from "../../atoms/choiceBirthday/ChoiceBirthday";
import { ToggleButton } from "../../atoms/toggleButton/ToggleButton";
import { ToggleSwitch } from "../../atoms/toggleSwitch/ToggleSwitch";
import "./clientDown.css";
import { TapButton } from "../../atoms/button/TapButton";
import { InfoClient } from "../../molecules/infoClient/InfoClient";
import { Loyalty } from "../../templates/client/Client";

interface ClientDownProps {
  genre?: string;
  birthday?: Birthday;
  remiderSMS?: boolean;
  marketingSMS?: boolean;
  loyalty?: Loyalty;
  infoClient?: string;
}

export const ClientDown: FC<ClientDownProps> = ({
  genre = "Homme",
  birthday = {
    day: 20,
    month: "Sept",
  },
  remiderSMS,
  marketingSMS,
  loyalty = {
    points: 42,
    gain: 10,
  },
  infoClient = "Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad.",
}) => {
  return (
    <div className="client-down-contenair">
      <div className="client-down-first-line">
        <WithIcon
          Icon={MdOutlinePerson}
          posIcon="left"
        >
          <ToggleButton
            values={["Homme", "Femme", "Enfants"]}
            onChange={console.log}
            select={genre}
          />
        </WithIcon>
        <WithIcon
          Icon={MdOutlineCake}
          posIcon="left"
        >
          <ChoiceBirthday
            dayInit={birthday.day}
            monthInit={birthday.month}
          />
        </WithIcon>
        <div className="client-down-toggles">
          <div className="toggle-client-down-contenair">
            <ToggleSwitch value={remiderSMS} />
            <p>SMS de rappel</p>
          </div>
          <div className="toggle-client-down-contenair">
            <ToggleSwitch value={marketingSMS} />
            <p>SMS marketing</p>
          </div>
        </div>
      </div>
      <div className="client-down-second-line">
        <InfoClient text={infoClient} />
      </div>
      <div className="client-down-third-line">
        <div className="client-down-unknow">
          <WithIcon
            Icon={MdContentCopy}
            posIcon="left"
          >
            <TapButton
              type="text"
              label="Carte de fidélité"
            />
          </WithIcon>
          <p>{` : Points : ${loyalty.points} - Gains : ${loyalty.gain}€ (+)`}</p>
        </div>
        <div className="client-down-unknow">
          <WithIcon
            Icon={MdCardMembership}
            posIcon="left"
          >
            <TapButton
              type="text"
              label="Forfait brushing par 5 - cheveux courts"
            />
          </WithIcon>
          <p>{"(4)"}</p>
        </div>
      </div>
    </div>
  );
};
