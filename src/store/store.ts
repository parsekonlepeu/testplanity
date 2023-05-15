import { PreloadedState, configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

const store = configureStore({
  reducer: rootReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof setupStore>

export default store
