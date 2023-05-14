import { FC, createRef, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hookTypedredux"
import {
  addPrestation,
  changeCollPrestations,
  changePresPrestations,
  delPrestation,
} from "../../../store/slices/appointmentSlice"
import { MdAddCircleOutline } from "react-icons/md"
import { Presta } from "../../../ui/molecules/presta/Presta"
import {
  ChangeDropdown,
  ListePrestation,
  PrestationAppointment,
} from "../../../utils/type"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./listPresta.css"

type PrestationWithRef = PrestationAppointment & {
  nodeRef: React.Ref<HTMLDivElement>
}

type ListePrestationWithRef = PrestationWithRef[]

const addNodeRef = (
  listPrestations: ListePrestation
): ListePrestationWithRef => {
  return listPrestations.map((prestation) => {
    return { ...prestation, nodeRef: createRef() }
  })
}

export const ListPresta: FC = () => {
  const dispatch = useAppDispatch()
  const listPrestations = useAppSelector(
    (state) => state.appointment.listPrestations
  )
  const created = useAppSelector((state) => state.appointment.created)
  const handleAddPresta = useCallback(() => {
    created && dispatch(addPrestation(null))
  }, [created])

  return (
    <div className="list-prest-contenair">
      <TransitionGroup className="prest-list">
        {addNodeRef(listPrestations).map((prestation) => {
          const onDelete = () => {
            dispatch(delPrestation(prestation.id))
          }
          const onChangePrestation: ChangeDropdown = (choice) => {
            dispatch(
              changePresPrestations({
                id: prestation.id,
                newPresta: choice,
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
            <CSSTransition
              key={prestation.id}
              nodeRef={prestation.nodeRef}
              timeout={200}
              classNames="prest"
            >
              <Presta
                prestation={prestation}
                onDelete={onDelete}
                onChangePrestation={onChangePrestation}
                onChangeCollaborateur={onChangeCollaborateur}
                key={prestation.id}
                ref={prestation.nodeRef}
                disabled={!created}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
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
