import {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import "./dropdown.css"
import { ChangeDropdown } from "../../../utils/type"

type ListDropDown<T> = T extends Record<"name", string> & Record<string, string>
  ? T[]
  : any[]

interface DropdownProps {
  label: string
  labelSelect: string
  onChange?: ChangeDropdown
  listChoice: ListDropDown<unknown>
  disable?: boolean
  color: string
}

const othersColors = ["#9F7AEA", "#F56565", "#ECC94B"]

export const Dropdown: FC<DropdownProps> = ({
  label,
  labelSelect,
  onChange,
  listChoice,
  disable = false,
  color = "#48BB78",
}) => {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(100)

  const colors = useMemo(() => [color, ...othersColors], [color])

  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useLayoutEffect(() => {
    const dropdown = document.getElementById("dropdown-wrapper")
    dropdown && setWidth(dropdown?.getClientRects()[0].width)
  }, [label])

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      !disable && setOpen((open) => !open)
    },
    [disable]
  )

  return (
    <div id="dropdown-wrapper">
      <button
        className="dropdown-main"
        onClick={handleClick}
        style={{
          border: open ? "1px #48BB78 solid" : "1px #ECEEED solid",
        }}
      >
        {value !== "" ? (
          <span
            className="dropdown-span-left"
            style={{ backgroundColor: color }}
          />
        ) : null}
        <div className="dropdown-contenair">
          <div className="dropdown-value">
            <p
              style={{
                color: open && !value ? "#34423E" : "#7F8C88",
              }}
            >
              {value !== "" ? labelSelect : label}
            </p>
            {value !== "" ? (
              <p className="dropdown-text-value">{value}</p>
            ) : null}
          </div>
          {!open ? (
            <MdArrowDropDown
              size={24}
              color="#5F706A"
            />
          ) : (
            <MdArrowDropUp
              size={24}
              color="#5F706A"
            />
          )}
        </div>
      </button>
      {open ? (
        <div className="dropdown-list">
          {listChoice.map((choice, index) => {
            const handleClickChoice: React.MouseEventHandler<
              HTMLButtonElement
            > = (e) => {
              e.preventDefault()
              e.stopPropagation()
              setValue(choice.name)
              onChange && onChange(choice)
              setOpen(false)
            }
            return (
              <button
                className="dropdown-choice"
                key={choice.name}
                style={{
                  minWidth: `${width}px`,
                }}
                onMouseDown={handleClickChoice}
              >
                <span
                  style={{
                    backgroundColor: colors[index % 4],
                  }}
                />
                <p>{choice.name}</p>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
