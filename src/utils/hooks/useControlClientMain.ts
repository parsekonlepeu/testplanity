import { useAppDispatch } from "../../store/hookTypedredux"
import { useCallback } from "react"
import {
  initAppointment,
  simpleChangeAppointment,
} from "../../store/slices/appointmentSlice"

export const useControlClientMain = () => {
  const dispatch = useAppDispatch()

  const onCreate = useCallback(() => {
    dispatch(
      simpleChangeAppointment({
        keys: ["created"],
        values: [true],
      })
    )
  }, [])

  const onDelete = useCallback(() => {
    dispatch(initAppointment(null))
  }, [])

  const onChangeTel = useCallback((tel: string) => {
    dispatch(
      simpleChangeAppointment({
        keys: ["tel"],
        values: [tel],
      })
    )
  }, [])

  const onChangeName = useCallback((name: string) => {
    dispatch(
      simpleChangeAppointment({
        keys: ["nameClient"],
        values: [name],
      })
    )
  }, [])

  const onChangeEmail = useCallback((email: string) => {
    dispatch(
      simpleChangeAppointment({
        keys: ["email"],
        values: [email],
      })
    )
  }, [])

  return {
    onCreate,
    onDelete,
    onChangeTel,
    onChangeName,
    onChangeEmail,
  }
}
