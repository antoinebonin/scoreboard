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

/**
 * 0 AVSR H
 * 1 AVSR F
 * 2 CRO Lyon
 * 3 JDA Dijon
 * 4 Hennuyers
 * 5 Rising stars Berne
 * 6 Lokomotief H
 * 7 Lokomotief F
 * 8 ASD BASKET COSTA
 * 9 SANGA BASKET MILAN
 * 10 LEGANÈS
 * 11 LAURENTY NEXT GEN ACADEMY
 * 12 Undefined
 */

const initialState = {
  vendredi: [
      {
          teamId: [8, 5],
          timeStart: "18:00",
          score: null,
          gymnase: 'st-rom'
      },
      {
          teamId: [1, 9],
          timeStart: "20:00",
          score: null,
          gymnase: 'st-rom'
      },
  ],
  samedi: [
    {
        teamId: [6, 0],
        timeStart: "08:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [10, 11],
        timeStart: "08:30",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [4, 2],
        timeStart: "10:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [7, 9],
        timeStart: "10:00",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [3, 5],
        timeStart: "11:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [1, 10],
        timeStart: "11:30",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [2, 8],
        timeStart: "13:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [11, 7],
        timeStart: "13:00",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [6, 3],
        timeStart: "14:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [9, 10],
        timeStart: "14:30",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [0, 4],
        timeStart: "16:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [0, 6],
        timeStart: "16:00",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [12, 12],
        timeStart: "17:30",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [12, 12],
        timeStart: "17:30",
        score: null,
        gymnase: 'ampuis'
    },
    {
        teamId: [12, 12],
        timeStart: "19:00",
        score: null,
        gymnase: 'st-rom'
    },
    {
        teamId: [1, 11],
        timeStart: "19:00",
        score: null,
        gymnase: 'st-rom'
    },
  ],
  dimanche: [
    {
      teamId: [12, 12],
      timeStart: "08:30",
      score: null,
        gymnase: 'ampuis'
    },
    {
      teamId: [10, 7],
      timeStart: "10:00",
      score: null,
        gymnase: 'ampuis'
    },
    {
      teamId: [12, 12],
      timeStart: "11:30",
      score: null,
        gymnase: 'ampuis'
    },
    {
      teamId: [12, 12],
      timeStart: "08:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [12, 12],
      timeStart: "10:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [11, 9],
      timeStart: "11:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [12, 12],
      timeStart: "13:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      teamId: [12, 12],
      timeStart: "14:30",
      score: null,
        gymnase: 'st-rom'
    },
    {
      // Inconnu 
      teamId: [12, 12],
      timeStart: "16:00",
      score: null,
        gymnase: 'st-rom'
    },
    {
      // Inconnu 
      teamId: [12, 12],
      timeStart: "18:30",
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