import { createSlice } from '@reduxjs/toolkit'

function saveState(state) {
  
  localStorage.setItem("programme", JSON.stringify(state))
}

function retrieveState() {
  let storage = JSON.parse(localStorage.getItem("programme"));
  if (storage) {
    let final = {
      vendredi: storage.vendredi,
      samedi: storage.samedi,
      dimanche: []
    }
    let i = 0;
    storage.dimanche.forEach(element => {
      if (element.teamId.includes(13)) {
        final.dimanche.push(initialState.dimanche[i])
      } else {
        final.dimanche.push(element)
      }
      i++;
    });
    return final;
  }
  return initialState;
}

const initialState = {
  vendredi: [
      {
          teamId: [1, 6],
          timeStart: "18:00",
          score: null,
          gymnase: 'st-rom'
      },
      {
          teamId: [0, 7],
          timeStart: "20:00",
          score: null,
          gymnase: 'st-rom'
      },
  ],
  samedi: [
    {
        teamId: [3, 8],
        timeStart: "08:30",
        score: null,
        gymnase: 'revent'
    },
    {
        teamId: [2, 11],
        timeStart: "10:00",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [5, 4],
        timeStart: "11:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [7, 11],
        timeStart: "13:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [3, 4],
        timeStart: "14:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [0, 2],
        timeStart: "16:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [8, 4],
        timeStart: "17:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [2, 7],
        timeStart: "19:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [3, 5],
        timeStart: "20:30",
        score: null,
        gymnase: 'st-rom'
    }
  ],
  dimanche: [
    {
      teamId: [0, 3],
      timeStart: "08:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [7, 5],
      timeStart: "10:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [2, 8],
      timeStart: "11:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [0, 7],
      timeStart: "13:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      // Inconnu 
      teamId: [10, 12],
      timeStart: "14:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      // Inconnu 
      teamId: [1, 9],
      timeStart: "16:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      // Inconnu 
      teamId: [3, 5],
      timeStart: "18:00",
      score: null,
        gymnase: 'st-rom'
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
        setMatch: (state, {payload}) => {
            console.log(payload)
            state[payload.day][payload.matchIndex] = payload.value
            saveState(state)
        }
    },
  })
  
  export const { addScore, setProg, setMatch } = programmeSlice.actions
  
  export default programmeSlice.reducer