import { configureStore } from '@reduxjs/toolkit'
import timeReducer from "../src/slices/timeSlice"

export const store = configureStore({
  reducer: {
    time: timeReducer
  },
})