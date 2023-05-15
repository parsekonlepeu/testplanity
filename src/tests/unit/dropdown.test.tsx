import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Dropdown } from "../../ui/atoms/dropdown/Dropdown"
import { LIST_PRESTATIONS } from "../../utils/constants/prestation"

test("open and choice", async () => {
  render(
    <Dropdown
      label="Choisir une prestation"
      labelSelect="prestation"
      listChoice={LIST_PRESTATIONS}
      color="red"
    />
  )

  expect(screen.getByRole("button")).toBeInTheDocument()

  fireEvent.click(screen.getByText("Choisir une prestation"))

  expect(screen.queryAllByRole("button").length).toBe(
    LIST_PRESTATIONS.length + 1
  )

  expect(screen.queryByText("Choisir une prestation")).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[0].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[1].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[2].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[3].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[4].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[5].name)).toBeInTheDocument()
  expect(screen.queryByText(LIST_PRESTATIONS[6].name)).toBeInTheDocument()

  const elementCliked = screen.queryByText(LIST_PRESTATIONS[4].name)

  expect(elementCliked).not.toBeNull()

  fireEvent.mouseDown(elementCliked as HTMLElement)

  expect(screen.queryByText("Choisir une prestation")).toBeNull()

  expect(screen.queryByText("prestation")).toBeInTheDocument()

  expect(screen.queryByText("prestation")).toBeInTheDocument()

  expect(screen.queryByText(LIST_PRESTATIONS[4].name)).toBeInTheDocument()

  expect(screen.queryAllByRole("button").length).toBe(1)

  fireEvent.click(screen.queryAllByRole("button")[0] as HTMLElement)

  expect(screen.queryAllByRole("button").length).toBe(
    LIST_PRESTATIONS.length + 1
  )

  const leCinquiemeElement = screen.queryByText(LIST_PRESTATIONS[5].name)

  expect(leCinquiemeElement).not.toBeNull()

  fireEvent.mouseDown(leCinquiemeElement as HTMLElement)

  expect(screen.queryByText(LIST_PRESTATIONS[4].name)).toBeNull()

  expect(screen.queryAllByRole("button").length).toBe(1)

  expect(screen.queryByText(LIST_PRESTATIONS[5].name)).not.toBeNull()
})
