import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import {
  Birthday,
  Genre,
  ListePrestation,
  Loyalty,
  TimeAppointment,
} from "../../utils/type";

export interface AppointmentState {
  created: boolean;
  came: boolean;
  tel: string;
  email: string;
  genre: Genre;
  date: string;
  birthday: Birthday;
  remiderSMS: boolean;
  marketingSMS: boolean;
  nameClient: string;
  infoClient: string;
  loyalty: Loyalty;
  loadingCreate: boolean;
  wholeDay: boolean;
  startTime: TimeAppointment;
  endTime: TimeAppointment;
  listPrestations: ListePrestation;
}

export const initialStateAppointment: AppointmentState = {
  created: false,
  came: false,
  tel: "",
  email: "",
  genre: "Homme",
  date: "Lundi 21 mars",
  birthday: {
    day: 11,
    month: "Fevr",
  },
  remiderSMS: false,
  marketingSMS: false,
  nameClient: "",
  infoClient:
    "Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad.",
  loyalty: {
    gain: 10,
    points: 42,
  },
  loadingCreate: false,
  wholeDay: false,
  startTime: {
    hour: 14,
    minute: 30,
  },
  endTime: {
    hour: 15,
    minute: 30,
  },
  listPrestations: [],
};

export const simpleChangeAppointmentReducer = <
  K extends keyof AppointmentState
>(
  state: AppointmentState,
  action: PayloadAction<{ keys: K[]; values: AppointmentState[K][] }>
) => {
  for (const [index, key] of action.payload.keys.entries()) {
    state[key] = action.payload.values[index];
  }
};

export const initAppointmentReducer = () => {
  console.log("dans inti !!");
  return initialStateAppointment;
};

const appointmentSlice: Slice<AppointmentState> = createSlice({
  name: "appointment",
  initialState: initialStateAppointment,
  reducers: {
    simpleChangeAppointment: simpleChangeAppointmentReducer,
    initAppointment: initAppointmentReducer,
  },
});

export const { simpleChangeAppointment, initAppointment } =
  appointmentSlice.actions;

export default appointmentSlice.reducer;
