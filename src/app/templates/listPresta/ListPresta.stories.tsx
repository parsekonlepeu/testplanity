import type { Meta } from "@storybook/react"
import { FC } from "react"
import { ListPresta } from "./ListPresta"
import {
  AppointmentState,
  addPrestationReducer,
  changeCollPrestationsReducer,
  changePresPrestationsReducer,
  delPrestationReducer,
  initAppointmentReducer,
  initialStateAppointment as mockState,
  simpleChangeAppointmentReducer,
} from "../../../store/slices/appointmentSlice"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"

type ChildMock = {
  appointmentState: AppointmentState
}

const Mockstore: FC<React.PropsWithChildren<ChildMock>> = ({
  appointmentState,
  children,
}) => (
  <Provider
    store={configureStore({
      reducer: {
        appointment: createSlice({
          name: "appointment",
          initialState: appointmentState,
          reducers: {
            simpleChangeAppointment: simpleChangeAppointmentReducer,
            initAppointment: initAppointmentReducer,
            addPrestation: addPrestationReducer,
            delPrestation: delPrestationReducer,
            changeCollPrestations: changeCollPrestationsReducer,
            changePresPrestations: changePresPrestationsReducer,
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
)

const meta = {
  title: "Test/Templates/ListPresta",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  component: ListPresta,
  parameters: {
    backgrounds: {
      default: "default",
      values: [{ name: "default", value: "#F9F9F9" }],
    },
  },
} satisfies Meta<typeof ListPresta>

export default meta

export const Active = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore
        appointmentState={{
          ...mockState,
          created: true,
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}

export const Disabled = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore appointmentState={mockState}>{story()}</Mockstore>
    ),
  ],
}
