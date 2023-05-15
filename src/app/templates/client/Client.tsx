import { FC } from "react"
import "./client.css"
import { useAppSelector } from "../../../store/hookTypedredux"
import { ClientMain } from "../clientMain/ClientMain"
import { ClientDown } from "../clientDown/ClientDown"
import { MdOutlineAccountCircle } from "react-icons/md"
import { Grow } from "../../../ui/atoms/Grow/Grow"

export const Client: FC = () => {
  const created = useAppSelector((state) => state.appointment.created)
  return (
    <div className="client-container">
      <div className="client-wrapper-icon">
        <MdOutlineAccountCircle
          size={20}
          color="#7F8C88"
        />
      </div>
      <ClientMain />
      {/* <Grow
        direction="vertical"
        duration={200}
        isin={created}
      >
        <ClientDown />
      </Grow> */}
      {created ? <ClientDown /> : null}
    </div>
  )
}
