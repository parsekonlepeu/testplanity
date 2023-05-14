import { forwardRef } from "react"
import { ChangeDropdown, PrestationAppointment } from "../../../utils/type"
import "./presta.css"
import { DisplayValue } from "../../atoms/displayValue/DisplayValue"
import { ButtonDelete } from "../buttonDelete/ButtonDelete"
import { Dropdown } from "../../atoms/dropdown/Dropdown"
import { MdOutlineDescription } from "react-icons/md"
import { LIST_PRESTATIONS } from "../../../utils/constants/prestation"
import { LIST_COLLABORATEUR } from "../../../utils/constants/collaborateur"

interface PrestaProps {
  disabled?: boolean
  onChangePrestation: ChangeDropdown
  onChangeCollaborateur: ChangeDropdown
  onDelete: () => void
  prestation: PrestationAppointment
  key: string
}

export const Presta = forwardRef<HTMLDivElement, PrestaProps>(
  (
    {
      disabled = false,
      onChangePrestation,
      onChangeCollaborateur,
      prestation,
      onDelete,
      key,
    },
    ref
  ) => {
    return (
      <div
        className="presta-container"
        ref={ref}
        key={key}
      >
        <div className="p-c-left">
          <div className="p-c-icon-contenair">
            <MdOutlineDescription size={20} />
          </div>
          <div className="p-c-prest-coll">
            <Dropdown
              label="Choisir une prestation"
              labelSelect="prestation"
              listChoice={LIST_PRESTATIONS}
              onChange={onChangePrestation}
              color="#48BB78"
              disable={disabled}
              value={prestation.name}
            />
            <Dropdown
              label="Choisir un collaborateur"
              labelSelect="collaborateur"
              listChoice={LIST_COLLABORATEUR}
              onChange={onChangeCollaborateur}
              color="#63B3ED"
              disable={disabled}
              value={prestation.collaborateur}
            />
          </div>
        </div>
        <div className="p-c-right">
          <DisplayValue
            value={prestation.time}
            unit="Min"
          />
          <DisplayValue
            value={prestation.price}
            unit="€"
          />
          {!disabled ? <ButtonDelete onClick={onDelete} /> : null}
        </div>
      </div>
    )
  }
)
