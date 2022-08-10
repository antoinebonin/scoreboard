import { createSlice } from '@reduxjs/toolkit'

export const currentSlice = createSlice({
    name: 'current',
    initialState: {
      teams: [{
        data: {
          name: "Avsr",
          colors: [
              "#d3d3d3",
              "#3d3d3d"
          ]
        },
        score: 0,
        fools: 0,
        selectedColor: 0
      },
      {
        data: {
          name: "Avsr",
          colors: [
              "#d3d3d3",
              "#3d3d3d"
          ]
        },
        score: 0,
        fools: 0,
        selectedColor: 0
      }],
      day: 0
    },
    reducers: {
      addScore: (state, action) => {
        state.teams[action.payload.team].score += action.payload.score
      },
      subScore: (state, action) => {
        state.teams[action.payload.team].score -= action.payload.score
      },
      addFools: (state, action) => {
        state.teams[action.payload.team].fools += action.payload.fools
      },
      subFools: (state, action) => {
        state.teams[action.payload.team].fools -= action.payload.fools
      },
      selectTeamFn: (state, action) => {
        state.teams[action.payload.team] = {data: action.payload.data, score: 0, fools: 0, selectedColor: 0}
      },
      selectColor: (state, action) => {
        state.teams[action.payload.team].selectedColor = action.payload.color
      },
      selectDay: (state, action) => {
        state.day = action.payload.day
      }
    },
  })
  
  export const { addScore, subScore, addFools, subFools, selectTeamFn, selectColor, selectDay } = currentSlice.actions
  
  export default currentSlice.reducer