import { createSlice } from '@reduxjs/toolkit'

// LOGO
import avsrLogo from '../../images/AVSR.png'
import asmbLogo from '../../images/AMSB.png'
import milanLogo from '../../images/MILAN.png'
import barceloneLogo from '../../images/BARCA.png'
import hennuyersLogo from '../../images/Hennuyers.png'
import udineLogo from '../../images/UDINE.png'
import svbdLogo from '../../images/SVBD.png'
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
                "#262626",
                "#32a852"
            ],
            logo: avsrLogo
        },
        {
            // 1
            name: "Avsr F",
            colors: [
                "#262626",
                "#32a852"
            ],
            logo: avsrLogo
        },
        {
            // 2
            name: "Svbd",
            colors: [
                "#262626",
                "#32a852"
            ],
            logo: svbdLogo
        },
        {
            // 3
            name: "Lokomotief",
            colors: [
                "#262626",
                "#32a852"
            ],
            logo: LokomotiefLogo
        },
        {
            // 4
            name: "Leganes",
            colors: [
                "#262626",
                "#32a852"
            ],
            logo: LeganesLogo
        },
        {
            // 5
            name: "AMSB",
            colors: [
                "#a8323a",
                "#e6e6e6"
            ],
            logo: asmbLogo
        },
        {
            // 6
            name: "Milan",
            colors: [
                "#f0b40e",
                "#a87532"
            ],
            logo: milanLogo
        },
        {
            // 7
            name: "Barcelone",
            colors: [
                "#2f302f",
                "#dedede"
            ],
            logo: barceloneLogo
        },
        {
            // 8
            name: "Hennuyers",
            colors: [
                "#fcfffd",
                "#960b1d"
            ],
            logo: hennuyersLogo
        },
        {
            // 9
            name: "Dijon",
            colors: [
                "#333333",
                "#dedede"
            ],
            logo: hennuyersLogo
        },
        {
            // 10
            name: "Prague",
            colors: [
                "#f2f2f2",
                "#002f9e"
            ],
            logo: hennuyersLogo
        },
        {
            // 11
            name: "Udine H",
            colors: [
                "#242424",
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