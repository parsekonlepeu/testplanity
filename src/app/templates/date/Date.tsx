import { FC, useCallback } from "react"
import "./date.css"
import { useAppDispatch, useAppSelector } from "../../../store/hookTypedredux"
import { ChoiceDate } from "../../../ui/atoms/choiceDate/ChoiceDate"
import { ChoiceHour } from "../../../ui/atoms/choiceHour/ChoiceHour"
import { simpleChangeAppointment } from "../../../store/slices/appointmentSlice"
import { WithIcon } from "../../../ui/molecules/withIcon/WithIcon"
import { TapButton } from "../../../ui/atoms/button/TapButton"
import { MdSync, MdCalendarToday } from "react-icons/md"
import { Grow } from "../../../ui/atoms/Grow/Grow"

export const Date: FC = () => {
  const dispatch = useAppDispatch()
  const date = useAppSelector((state) => state.appointment.date)
  const wholeDay = useAppSelector((state) => state.appointment.wholeDay)
  const startTime = useAppSelector((state) => state.appointment.startTime)
  const endTime = useAppSelector((state) => state.appointment.endTime)

  const handleClickWholeDay = useCallback(() => {
    dispatch(
      simpleChangeAppointment({
        keys: ["wholeDay"],
        values: [!wholeDay],
      })
    )
  }, [wholeDay])

  return (
    <div className="date-contenair">
      <div className="date-main">
        <div className="date-icon-contenair">
          <MdCalendarToday />
        </div>
        <ChoiceDate date={date} />
        <Grow
          isin={!wholeDay}
          duration={200}
          direction="horizontal"
        >
          <div className="date-choice-hour">
            <p>de</p>
            <ChoiceHour
              hours={startTime.hour}
              minutes={startTime.minute}
            />
            <p>à</p>
            <ChoiceHour
              hours={startTime.hour}
              minutes={startTime.minute}
            />
            <p className="date-choice-hour-count">(1h)</p>
          </div>
        </Grow>
        <div
          className="cont-date-inp-whole-day"
          onClick={handleClickWholeDay}
        >
          <input
            type="checkbox"
            onClick={handleClickWholeDay}
            name="wholeDay"
            checked={wholeDay}
          />
          <label htmlFor="wholeDay">journée entier</label>
        </div>
      </div>
      <div className="date-repeat-cont">
        <WithIcon Icon={MdSync}>
          <TapButton
            label="Répéter"
            labelColor="#48BB78"
            type="text"
          />
        </WithIcon>
      </div>
    </div>
  )
}
