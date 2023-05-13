import { FC } from "react"
import { WithIcon } from "../../../ui/molecules/withIcon/WithIcon"
import {
  MdOutlineCake,
  MdOutlinePerson,
  MdContentCopy,
  MdCardMembership,
} from "react-icons/md"
import { ChoiceBirthday } from "../../../ui/atoms/choiceBirthday/ChoiceBirthday"
import { ToggleButton } from "../../../ui/atoms/toggleButton/ToggleButton"
import { ToggleSwitch } from "../../../ui/atoms/toggleSwitch/ToggleSwitch"
import "./clientDown.css"
import { TapButton } from "../../../ui/atoms/button/TapButton"
import { InfoClient } from "../../../ui/molecules/infoClient/InfoClient"
import { useAppSelector } from "../../../store/hookTypedredux"

export const ClientDown: FC = () => {
  const genre = useAppSelector((state) => state.appointment.genre)
  const birthday = useAppSelector((state) => state.appointment.birthday)
  const remiderSMS = useAppSelector((state) => state.appointment.remiderSMS)
  const marketingSMS = useAppSelector((state) => state.appointment.marketingSMS)
  const infoClient = useAppSelector((state) => state.appointment.infoClient)
  const loyalty = useAppSelector((state) => state.appointment.loyalty)
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
        <InfoClient
          text={infoClient}
          fold={false}
        />
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
  )
}
