import { configureStore } from '@reduxjs/toolkit'
import roleReducer from "./slices/roleSlice"
export const Store = () => {
  return configureStore({
    reducer: {
        roleRc:roleReducer,
    },
  })
}