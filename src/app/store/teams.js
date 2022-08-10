import { createSlice } from '@reduxjs/toolkit'

// LOGO
import avsrLogo from '../../images/AVSR.png'
import asmbLogo from '../../images/AMSB.png'
import uemLogo from '../../images/UEM.png'
import barceloneLogo from '../../images/BARCA.png'
import hennuyersLogo from '../../images/Hennuyers.png'
import dijonLogo from '../../images/DIJON.png'
import pragueLogo from '../../images/PRAGUE.png'
import udineLogo from '../../images/UDINE.png'
import undifinedLogo from '../../images/UNDIFINED.png'

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
      teams : [
        {
            name: "Avsr",
            colors: [
                "#262626",
                "#32a852"
            ],
            logo: avsrLogo
        },
        {
            name: "AMSB",
            colors: [
                "#a8323a",
                "#e6e6e6"
            ],
            logo: asmbLogo
        },
        {
            name: "UEM",
            colors: [
                "#f0b40e",
                "#a87532"
            ],
            logo: uemLogo
        },
        {
            name: "Barcelone",
            colors: [
                "#2f302f",
                "#dedede"
            ],
            logo: barceloneLogo
        },
        {
            name: "Hennuyers",
            colors: [
                "#fcfffd",
                "#960b1d"
            ],
            logo: hennuyersLogo
        },
        {
            name: "Dijon",
            colors: [
                "#333333",
                "#dedede"
            ],
            logo: dijonLogo
        },
        {
            name: "Prague",
            colors: [
                "#f2f2f2",
                "#002f9e"
            ],
            logo: pragueLogo
        },
        {
            name: "Udine",
            colors: [
                "#242424",
                "#a87532"
            ],
            logo: udineLogo
        },
        {
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
      }
    },
  })
  
  export const { addTeam } = teamsSlice.actions
  
  export default teamsSlice.reducer