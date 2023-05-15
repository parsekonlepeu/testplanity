import { fireEvent, screen } from "@testing-library/react"
import { renderWithProviders } from "../utils/test-utils"
import { ListPresta } from "../../app/templates/listPresta/ListPresta"
import { describe, expect, test } from "vitest"
import { initialStateAppointment } from "../../store/slices/appointmentSlice"
import { LIST_PRESTATIONS } from "../../utils/constants/prestation"
import { LIST_COLLABORATEUR } from "../../utils/constants/collaborateur"

describe("list prestation", () => {
  test("render with default state", () => {
    const listPresta = renderWithProviders(<ListPresta />, {
      preloadedState: { appointment: initialStateAppointment },
    })
    expect(
      listPresta.container.getElementsByClassName("list-prest-contenair").length
    ).toBe(1)
  })
  test("should contains 3 button by default before created", () => {
    renderWithProviders(<ListPresta />, {
      preloadedState: { appointment: initialStateAppointment },
    })
    expect(screen.queryAllByRole("button").length).toBe(3)
  })
  test("not handle without created", () => {
    const listPresta = renderWithProviders(<ListPresta />, {
      preloadedState: {
        appointment: {
          ...initialStateAppointment,
          created: false,
        },
      },
    })
    expect(
      screen.queryByText("Ajouter une prestation à la suite")
    ).not.toBeNull()
    fireEvent.click(
      screen.queryByText("Ajouter une prestation à la suite") as HTMLElement
    )
    expect(
      listPresta.container.getElementsByClassName("presta-container").length
    ).toBe(1)
    expect(screen.queryByText("Choisir une prestation")).not.toBeNull()
    fireEvent.click(screen.queryByText("Choisir une prestation") as HTMLElement)
    expect(screen.queryByText(LIST_PRESTATIONS[0].name)).toBeNull()
    expect(screen.queryByText("Choisir un collaborateur")).not.toBeNull()
    fireEvent.click(
      screen.queryByText("Choisir un collaborateur") as HTMLElement
    )
    expect(screen.queryByText(LIST_COLLABORATEUR[0].name)).toBeNull()
  })
  test("should contains 4 button by default after created", () => {
    renderWithProviders(<ListPresta />, {
      preloadedState: {
        appointment: { ...initialStateAppointment, created: true },
      },
    })
    expect(screen.queryAllByRole("button").length).toBe(4)
  })
  test("should add and del presta if created", () => {
    const listPresta = renderWithProviders(<ListPresta />, {
      preloadedState: {
        appointment: {
          ...initialStateAppointment,
          created: true,
        },
      },
    })
    expect(
      screen.queryByText("Ajouter une prestation à la suite")
    ).not.toBeNull()
    fireEvent.click(
      screen.queryByText("Ajouter une prestation à la suite") as HTMLElement
    )
    expect(
      listPresta.container.getElementsByClassName("presta-container").length
    ).toBe(2)
    fireEvent.click(
      screen.queryByText("Ajouter une prestation à la suite") as HTMLElement
    )
    expect(
      listPresta.container.getElementsByClassName("presta-container").length
    ).toBe(3)
    fireEvent.click(
      listPresta.container
        .getElementsByClassName("presta-container")[1]
        .getElementsByClassName("icon-button")[0]
    )
    setTimeout(() => {
      expect(
        listPresta.container.getElementsByClassName("presta-container").length
      ).toBe(2)
    }, 300)
    fireEvent.click(
      listPresta.container
        .getElementsByClassName("presta-container")[1]
        .getElementsByClassName("icon-button")[0]
    )
    setTimeout(() => {
      expect(
        listPresta.container.getElementsByClassName("presta-container").length
      ).toBe(1)
    }, 300)
    fireEvent.click(
      listPresta.container
        .getElementsByClassName("presta-container")[0]
        .getElementsByClassName("icon-button")[0]
    )
    setTimeout(() => {
      expect(
        listPresta.container.getElementsByClassName("presta-container").length
      ).toBe(0)
    }, 300)
  })
})
