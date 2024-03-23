import { createSlice } from '@reduxjs/toolkit'

// LOGO
import avsrLogo from '../../images/AVSR.png'
import asmbLogo from '../../images/AMSB.png'
import milanLogo from '../../images/MILAN.png'
import barceloneLogo from '../../images/BARCA.png'
import hennuyersLogo from '../../images/Hennuyers.png'
import udineLogo from '../../images/UDINE.png'
import svbdLogo from '../../images/SVBD.png'
import sgoffLogo from '../../images/SGOSFF.jpeg'
import LokomotiefLogo from '../../images/Lokomotief.png'
import LeganesLogo from '../../images/LEGANES.png'
import undifinedLogo from '../../images/UNDIFINED.png'

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
      teams : [
        {
            // 0
            name: "Avsr H",
            colors: [
                "#1a1919",
                "#32a852"
            ],
            logo: avsrLogo
        },
        {
            // 1
            name: "Avsr F",
            colors: [
                "#4287f5",
                "#32a852"
            ],
            logo: avsrLogo
        },
        {
            // 2
            name: "Svbd",
            colors: [
                "#eb130c",
                "#32a852"
            ],
            logo: svbdLogo
        },
        {
            // 3
            name: "Lokomotief",
            colors: [
                "#eb4034",
                "#f0f0f2"
            ],
            logo: LokomotiefLogo
        },
        {
            // 4
            name: "Leganes H",
            colors: [
                "#2a3970",
                "#32a852"
            ],
            logo: LeganesLogo
        },
        {
            // 5
            name: "AMSB",
            colors: [
                "#f0f0f2",
                "#eb4034"
            ],
            logo: asmbLogo
        },
        {
            // 6
            name: "Milan",
            colors: [
                "#fa0707",
                "#a87532"
            ],
            logo: milanLogo
        },
        {
            // 7
            name: "Barcelone",
            colors: [
                "#e6e1e1",
                "#dedede"
            ],
            logo: barceloneLogo
        },
        {
            // 8
            name: "Hennuyers",
            colors: [
                "#e8e8e8",
                "#960b1d"
            ],
            logo: hennuyersLogo
        },
        {
            // 9
            name: "Leganes F",
            colors: [
                "#2a3970",
                "#e8e8e8"
            ],
            logo: LeganesLogo
        },
        {
            // 10
            name: "SGOFF",
            colors: [
                "#f2f2f2",
                "#002f9e"
            ],
            logo: sgoffLogo
        },
        {
            // 11
            name: "Udine H",
            colors: [
                "#2e2e2e",
                "#a87532"
            ],
            logo: udineLogo
        },
        {
            // 12
            name: "Udine F",
            colors: [
                "#242424",
                "#a87532"
            ],
            logo: udineLogo
        },
        {
            // 13
            name: "Non défini",
            colors: [
                "#a8323a",
                "#a87532"
            ],
            logo: undifinedLogo
        },
      ]
    },
    reducers: {
      addTeam: (state, action) => {
        state.teams.push(action.payload.team)
      },
      setTeams: (state, action) => {
        state.teams = action.payload;
      }
    },
  })
  
  export const { addTeam, setTeams } = teamsSlice.actions
  
  export default teamsSlice.reducer