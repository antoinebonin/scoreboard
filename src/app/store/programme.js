import { createSlice } from '@reduxjs/toolkit'

function saveState(state) {
  
  localStorage.setItem("programme", JSON.stringify(state))
}

function retrieveState() {
  let storage = JSON.parse(localStorage.getItem("programme"));
  return storage ? storage : initialState;
}

const initialState = {
  vendredi: [
      {
          teamId: [4, 3],
          timeStart: "18:00",
          score: null
      },
      {
          teamId: [6, 0],
          timeStart: "19:30",
          score: null
      },
  ],
  samedi: [
    {
        teamId: [0, 2],
        timeStart: "09:00",
        score: null
    },
    {
        teamId: [4, 1],
        timeStart: "10:30",
        score: null
    },
    {
        teamId: [3, 7],
        timeStart: "12:00",
        score: null
    },
    {
        teamId: [5, 2],
        timeStart: "14:00",
        score: null
    },
    {
        teamId: [3, 1],
        timeStart: "15:30",
        score: null
    },
    {
        teamId: [2, 6],
        timeStart: "17:00",
        score: null
    }
  ],
  dimanche: [
    {
      teamId: [6, 1],
      timeStart: "09:00",
      score: null
    },
    {
      teamId: [5, 3],
      timeStart: "10:30",
      score: null
    },
    {
      teamId: [2, 4],
      timeStart: "12:00",
      score: null
    },
    {
      teamId: [7, 0],
      timeStart: "13:30",
      score: null
    },
    {
      // Inconnu 
      teamId: [5, 6],
      timeStart: "15:30",
      score: null
    },
    {
      // Inconnu 
      teamId: [3, 1],
      timeStart: "17:30",
      score: null
    },
  ]
}

export const programmeSlice = createSlice({
    name: 'prog',
    initialState: retrieveState(),
    reducers: {
      addScore: (state, action) => {
        state[action.payload.day][action.payload.index].score = action.payload.score;
        saveState(state);
      }
    },
  })
  
  export const { addScore } = programmeSlice.actions
  
  export default programmeSlice.reducer