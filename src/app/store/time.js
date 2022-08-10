import { createSlice } from '@reduxjs/toolkit'

export const timeSlice = createSlice({
    name: 'time',
    initialState: {
      timers : [
        {
          count: 480,
          quarter: 1
        },
        {
          count: 300
        },
        {
          count: 60
        }
      ]
    },
    reducers: {
      addTime: (state, action) => {
        state.timers[action.payload.timer].count += 1
      },
      subTime: (state, action) => {
        state.timers[action.payload.timer].count -= 1
      },
      setTime: (state, action) => {
        state.timers[action.payload.timer].count = action.payload.time
      },
      addQuarter: (state, action) => {
        state.timers[action.payload.timer].quarter += 1
      },
      subQuarter: (state, action) => {
        state.timers[action.payload.timer].quarter -= 1
      },
      setQuarter: (state, action) => {
        state.timers[action.payload.timer].quarter = action.payload.time
      },
    },
  })
  
  export const { addTime, subTime, setTime, addQuarter, subQuarter, setQuarter } = timeSlice.actions
  
  export default timeSlice.reducer