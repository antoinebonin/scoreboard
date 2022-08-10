import { configureStore } from '@reduxjs/toolkit'
import currentReducer  from './current'
import timeReducer  from './time'
import teamsReducer  from './teams'
import programmeReducer from './programme'

export default configureStore({
  reducer: {
      current: currentReducer,
      time: timeReducer,
      teams: teamsReducer,
      prog: programmeReducer
  },
})