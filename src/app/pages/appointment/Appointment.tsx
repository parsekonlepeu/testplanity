import { FC } from "react"
import { Tabbar } from "../../templates/tabbar/Tabbar"
import {
  MdArrowBack,
  MdDone,
  MdOutlineDescription,
  MdOutlineCreate,
} from "react-icons/md"
import { IconButton } from "../../../ui/atoms/iconButton/IconButton"
import { Client } from "../../templates/client/Client"
import { Date } from "../../templates/date/Date"
import { ListPresta } from "../../templates/listPresta/ListPresta"
import { WithIcon } from "../../../ui/molecules/withIcon/WithIcon"
import "./appointment.css"
import { TapButton } from "../../../ui/atoms/button/TapButton"

export const Appointment: FC = () => {
  return (
    <div className="appoint-contenair">
      <div className="appoint-head">
        <p>Rendez-vous</p>
        <div className="appoint-head-button">
          <IconButton
            Icon={MdArrowBack}
            backgroudnColor="white"
            color="#34423E"
            borderColor="#34423E"
            size={40}
          />
          <IconButton
            Icon={MdDone}
            backgroudnColor="#48BB78"
            hoverColor="#38A169"
            hoverBorderColor="#38A169"
            hoverIconColor="white"
            color="white"
            borderColor="#48BB78"
            size={40}
          />
        </div>
      </div>
      <div className="appoint-main">
        <Client />
        <Date />
        <ListPresta />
        <div className="appoint-button-bott">
          <WithIcon Icon={MdOutlineDescription}>
            <TapButton
              label="Ajouter un titre"
              padding={0}
              type="text"
            />
          </WithIcon>
          <WithIcon Icon={MdOutlineCreate}>
            <TapButton
              label="Ajouter une note"
              padding={0}
              type="text"
            />
          </WithIcon>
        </div>
      </div>
      <div className="appoint-footer">
        <Tabbar />
      </div>
    </div>
  )
}
