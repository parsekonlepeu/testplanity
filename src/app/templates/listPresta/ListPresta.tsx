import { FC, useCallback } from "react"
import "./listPresta.css"
import { useAppDispatch, useAppSelector } from "../../../store/hookTypedredux"
import { prestation } from "../../../ui/atoms/dropdown/Dropdown.stories"
import {
  addPrestation,
  changeCollPrestations,
  changePresPrestations,
  delPrestation,
} from "../../../store/slices/appointmentSlice"
import { MdAddCircleOutline } from "react-icons/md"
import { Presta } from "../../../ui/molecules/presta/Presta"
import { ChangeDropdown } from "../../../utils/type"
import "./listPresta.css"

export const ListPresta: FC = () => {
  const dispatch = useAppDispatch()
  const listPrestations = useAppSelector(
    (state) => state.appointment.listPrestations
  )
  const handleAddPresta = useCallback(() => {
    dispatch(addPrestation(null))
  }, [])
  return (
    <div className="list-prest-contenair">
      {listPrestations.map((prestation) => {
        const onDelete = () => {
          dispatch(delPrestation(prestation.id))
        }
        const onChangePrestation: ChangeDropdown = (choice) => {
          dispatch(
            changePresPrestations({
              id: prestation.id,
              newPresta: choice.name,
            })
          )
        }
        const onChangeCollaborateur: ChangeDropdown = (choice) => {
          dispatch(
            changeCollPrestations({
              id: prestation.id,
              newColl: choice.name,
            })
          )
        }
        return (
          <div key={prestation.id}>
            <Presta
              prestation={prestation}
              onDelete={onDelete}
              onChangePrestation={onChangePrestation}
              onChangeCollaborateur={onChangeCollaborateur}
            />
          </div>
        )
      })}
      <button
        className="list-prest-add"
        onClick={handleAddPresta}
      >
        <div className="list-prest-add-main">
          <MdAddCircleOutline size={20} />
          Ajouter une prestation à la suite
        </div>
      </button>
    </div>
  )
}
