import type { Meta } from "@storybook/react"
import { FC } from "react"
import { Client } from "./Client"
import {
  AppointmentState,
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
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
)

const meta = {
  title: "Test/Templates/Client",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  component: Client,
} satisfies Meta<typeof Client>

export default meta

export const Default = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore appointmentState={mockState}>{story()}</Mockstore>
    ),
  ],
}
