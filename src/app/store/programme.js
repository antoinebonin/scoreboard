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
          teamId: [1, 6],
          timeStart: "18:00",
          score: null
      },
      {
          teamId: [0, 7],
          timeStart: "20:00",
          score: null
      },
  ],
  samedi: [
    {
        teamId: [3, 8],
        timeStart: "08:30",
        score: null
    },
    {
        teamId: [2, 11],
        timeStart: "10:00",
        score: null
    },
    {
        teamId: [5, 4],
        timeStart: "11:30",
        score: null
    },
    {
        teamId: [7, 11],
        timeStart: "13:00",
        score: null
    },
    {
        teamId: [3, 4],
        timeStart: "14:30",
        score: null
    },
    {
        teamId: [0, 2],
        timeStart: "16:00",
        score: null
    },
    {
        teamId: [8, 4],
        timeStart: "17:30",
        score: null
    },
    {
        teamId: [2, 7],
        timeStart: "19:00",
        score: null
    },
    {
        teamId: [3, 5],
        timeStart: "20:30",
        score: null
    }
  ],
  dimanche: [
    {
      teamId: [13, 13],
      timeStart: "08:30",
      score: null
    },
    {
      teamId: [13, 13],
      timeStart: "10:00",
      score: null
    },
    {
      teamId: [13, 13],
      timeStart: "11:30",
      score: null
    },
    {
      teamId: [13, 13],
      timeStart: "13:00",
      score: null
    },
    {
      // Inconnu 
      teamId: [13, 13],
      timeStart: "14:30",
      score: null
    },
    {
      // Inconnu 
      teamId: [13, 13],
      timeStart: "16:00",
      score: null
    },
    {
      // Inconnu 
      teamId: [13, 13],
      timeStart: "18:00",
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
      },
      setProg: (state, action) => {
        state.vendredi = action.payload.vendredi;
        state.samedi = action.payload.samedi;
        state.dimanche = action.payload.dimanche;
      },
    },
  })
  
  export const { addScore, setProg } = programmeSlice.actions
  
  export default programmeSlice.reducer