import { FC, useCallback } from "react"
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
import { TapButton } from "../../../ui/atoms/button/TapButton"
import { InfoClient } from "../../../ui/molecules/infoClient/InfoClient"
import { useAppDispatch, useAppSelector } from "../../../store/hookTypedredux"
import "./clientDown.css"
import { simpleChangeAppointment } from "../../../store/slices/appointmentSlice"

export const ClientDown: FC = () => {
  const dispatch = useAppDispatch()
  const genre = useAppSelector((state) => state.appointment.genre)
  const birthday = useAppSelector((state) => state.appointment.birthday)
  const remiderSMS = useAppSelector((state) => state.appointment.remiderSMS)
  const marketingSMS = useAppSelector((state) => state.appointment.marketingSMS)
  const infoClient = useAppSelector((state) => state.appointment.infoClient)
  const loyalty = useAppSelector((state) => state.appointment.loyalty)
  const infoClientOpen = useAppSelector(
    (state) => state.appointment.infoClientOpen
  )
  const handleClickInfoClient = useCallback(() => {
    dispatch(
      simpleChangeAppointment({
        keys: ["infoClientOpen"],
        values: [!infoClientOpen],
      })
    )
  }, [infoClientOpen])
  return (
    <div className="client-down-contenair">
      <div className="client-down-first-line">
        <WithIcon
          Icon={MdOutlinePerson}
          posIcon="left"
          iconColor="#5F706A"
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
          iconColor="#5F706A"
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
          onClick={handleClickInfoClient}
        />
      </div>
      <div className="client-down-third-line">
        <div className="client-down-unknow">
          <WithIcon
            Icon={MdContentCopy}
            posIcon="left"
            iconColor="#5F706A"
          >
            <TapButton
              type="text"
              label="Carte de fidélité"
              labelColor="#34423E"
              padding={0}
            />
          </WithIcon>
          <p>{` : Points : ${loyalty.points} - Gains : ${loyalty.gain}€ (+)`}</p>
        </div>
        <div className="client-down-unknow">
          <WithIcon
            Icon={MdCardMembership}
            posIcon="left"
            iconColor="#5F706A"
          >
            <TapButton
              type="text"
              label="Forfait brushing par 5 - cheveux courts"
              labelColor="#34423E"
              padding={0}
            />
          </WithIcon>
          <p>{"(4)"}</p>
        </div>
      </div>
    </div>
  )
}
