import { forwardRef } from "react"
import { ChangeDropdown, PrestationAppointment } from "../../../utils/type"
import "./presta.css"
import { DisplayValue } from "../../atoms/displayValue/DisplayValue"
import { Grow } from "../../atoms/Grow/Grow"
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
}

export const Presta = forwardRef<HTMLDivElement, PrestaProps>(
  (
    {
      disabled = false,
      onChangePrestation,
      onChangeCollaborateur,
      prestation,
      onDelete,
    },
    ref
  ) => {
    return (
      <div
        className="presta-container"
        ref={ref}
      >
        <div className="p-c-left">
          <div className="p-c-icon-contenair">
            <MdOutlineDescription />
          </div>
          <div className="p-c-prest-coll">
            <Dropdown
              label="Choisir une prestation"
              labelSelect="prestation"
              listChoice={LIST_PRESTATIONS}
              onChange={onChangePrestation}
              color="#48BB78"
              disable={disabled}
            />
            <Dropdown
              label="Choisir un collaborateur"
              labelSelect="collaborateur"
              listChoice={LIST_COLLABORATEUR}
              onChange={onChangeCollaborateur}
              color="#63B3ED"
              disable={disabled}
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
          <Grow
            isin={!disabled}
            duration={300}
            direction="horizontal"
          >
            <ButtonDelete onClick={onDelete} />
          </Grow>
        </div>
      </div>
    )
  }
)
