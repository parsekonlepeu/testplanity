import type { Meta } from "@storybook/react"
import { FC } from "react"
import { Appointment } from "./Appointment"
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
  title: "Test/Pages/Appointment",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  component: Appointment,
} satisfies Meta<typeof Appointment>

export default meta

export const Default = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore appointmentState={mockState}>{story()}</Mockstore>
    ),
  ],
}

export const NotCreated = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore
        appointmentState={{
          ...mockState,
          nameClient: "François Rolet",
          tel: "06 00 00 00 00",
          email: "f.rolet@mail.com",
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}

export const CreatedCame = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore
        appointmentState={{
          ...mockState,
          nameClient: "François Rolet",
          tel: "06 00 00 00 00",
          email: "f.rolet@mail.com",
          created: true,
          came: true,
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}

export const CreatedNotCame = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore
        appointmentState={{
          ...mockState,
          nameClient: "François Rolet",
          tel: "06 00 00 00 00",
          email: "f.rolet@mail.com",
          created: true,
          came: false,
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}
