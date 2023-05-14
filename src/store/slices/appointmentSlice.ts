import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"
import {
  Birthday,
  Genre,
  IdPrestationAppointment,
  ListePrestation,
  Loyalty,
  PrestationAppointment,
  TimeAppointment,
} from "../../utils/type"
import { v4 as uuidv4 } from "uuid"

export interface AppointmentState {
  created: boolean
  came: boolean
  tel: string
  email: string
  genre: Genre
  date: string
  birthday: Birthday
  remiderSMS: boolean
  marketingSMS: boolean
  nameClient: string
  infoClient: string
  loyalty: Loyalty
  loadingCreate: boolean
  wholeDay: boolean
  startTime: TimeAppointment
  endTime: TimeAppointment
  listPrestations: ListePrestation
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
  listPrestations: [
    {
      id: uuidv4(),
      name: "",
      price: 60,
      collaborateur: "",
      time: 60,
    },
  ],
}

export const simpleChangeAppointmentReducer = <
  K extends keyof AppointmentState
>(
  state: AppointmentState,
  action: PayloadAction<{ keys: K[]; values: AppointmentState[K][] }>
) => {
  for (const [index, key] of action.payload.keys.entries()) {
    state[key] = action.payload.values[index]
  }
}

export const initAppointmentReducer = () => {
  return initialStateAppointment
}

export const addPrestationReducer = (state: AppointmentState) => {
  state.listPrestations.push({
    id: uuidv4(),
    name: "",
    time: 60,
    price: 60,
    collaborateur: "",
  })
}

export const delPrestationReducer = (
  state: AppointmentState,
  action: PayloadAction<IdPrestationAppointment>
) => {
  state.listPrestations = state.listPrestations.filter(
    (presta) => action.payload !== presta.id
  )
}

export const changeCollPrestationsReducer = (
  state: AppointmentState,
  action: PayloadAction<{ id: IdPrestationAppointment; newColl: string }>
) => {
  const index = state.listPrestations.findIndex(
    (prest) => prest.id === action.payload.id
  )
  if (index !== -1) {
    state.listPrestations[index].collaborateur = action.payload.newColl
  } else {
    console.error("collaborateur inconnue")
  }
}

export const changePresPrestationsReducer = (
  state: AppointmentState,
  action: PayloadAction<{
    id: IdPrestationAppointment
    newPresta: PrestationAppointment
  }>
) => {
  const index = state.listPrestations.findIndex(
    (prest) => prest.id === action.payload.id
  )
  if (index !== -1) {
    state.listPrestations[index].name = action.payload.newPresta.name
    state.listPrestations[index].price = action.payload.newPresta.price
    state.listPrestations[index].time = action.payload.newPresta.time
  } else {
    console.error("prestation inconnue")
  }
}

const appointmentSlice: Slice<AppointmentState> = createSlice({
  name: "appointment",
  initialState: initialStateAppointment,
  reducers: {
    simpleChangeAppointment: simpleChangeAppointmentReducer,
    initAppointment: initAppointmentReducer,
    addPrestation: addPrestationReducer,
    delPrestation: delPrestationReducer,
    changeCollPrestations: changeCollPrestationsReducer,
    changePresPrestations: changePresPrestationsReducer,
  },
})

export const {
  simpleChangeAppointment,
  initAppointment,
  addPrestation,
  delPrestation,
  changeCollPrestations,
  changePresPrestations,
} = appointmentSlice.actions

export default appointmentSlice.reducer
