import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    addTime: (state, action) => {
      state.value.push(action.payload)
    }
  },
})

export const { addTime } = timeSlice.actions

export const selectTimeState = (state) => state.time;

export default timeSlice.reducer