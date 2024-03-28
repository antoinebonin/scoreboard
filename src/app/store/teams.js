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
            name: "CRO Lyon",
            colors: [
                "#eb130c",
                "#32a852"
            ],
            logo: undifinedLogo
        },
        {
            // 3
            name: "JDA Dijon",
            colors: [
                "#eb4034",
                "#f0f0f2"
            ],
            logo: undifinedLogo
        },
        {
            // 4
            name: "Hennuyers",
            colors: [
                "#2a3970",
                "#32a852"
            ],
            logo: hennuyersLogo
        },
        {
            // 5
            name: "Rising stars Berne",
            colors: [
                "#f0f0f2",
                "#eb4034"
            ],
            logo: undifinedLogo
        },
        {
            // 6
            name: "Lokomotief H",
            colors: [
                "#fa0707",
                "#a87532"
            ],
            logo: LokomotiefLogo
        },
        {
            // 7
            name: "Lokomotief F",
            colors: [
                "#e6e1e1",
                "#dedede"
            ],
            logo: LokomotiefLogo
        },
        {
            // 8
            name: "ASD BASKET COSTA",
            colors: [
                "#e8e8e8",
                "#960b1d"
            ],
            logo: undifinedLogo
        },
        {
            // 9
            name: "SANGA BASKET MILAN",
            colors: [
                "#2a3970",
                "#e8e8e8"
            ],
            logo: undifinedLogo
        },
        {
            // 10
            name: "LEGANÈS",
            colors: [
                "#f2f2f2",
                "#002f9e"
            ],
            logo: undifinedLogo
        },
        {
            // 11
            name: "LAURENTY NEXT GEN ACADEMY",
            colors: [
                "#2e2e2e",
                "#a87532"
            ],
            logo: undifinedLogo
        },
        {
            // 12
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