import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface AppointmentState {
  created: boolean;
  came: boolean;
}

const initialState: AppointmentState = {
  created: false,
  came: false,
};

const appointmentSlice: Slice<AppointmentState> = createSlice({
  name: "presta",
  initialState: initialState,
  reducers: {
    changeCreated: (state, action: PayloadAction<boolean>) => {
      state.created = action.payload;
    },
    changeCame: (state, action: PayloadAction<boolean>) => {
      state.came = action.payload;
    },
  },
});

export const { changeCreated, changeCame } = appointmentSlice.actions;

export default appointmentSlice.reducer;
