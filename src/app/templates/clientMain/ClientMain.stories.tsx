import type { Meta } from "@storybook/react";
import { FC } from "react";
import { ClientMain } from "./ClientMain";
import {
  AppointmentState,
  initialStateAppointment as mockState,
  simpleChangeAppointmentReducer,
} from "../../../store/slices/appointmentSlice";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

type ChildMock = {
  appointmentState: AppointmentState;
};

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
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta = {
  title: "Test/Templates/ClientMain",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  component: ClientMain,
} satisfies Meta<typeof ClientMain>;

export default meta;

export const Default = {
  decorators: [
    (story: () => React.ReactNode) => (
      <Mockstore appointmentState={mockState}>{story()}</Mockstore>
    ),
  ],
};

export const Created = {
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
};
