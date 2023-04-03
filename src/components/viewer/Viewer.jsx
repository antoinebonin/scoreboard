import Score from './teams/Score'
import MiTemps from './mi-temps/MiTemps'
import './Viewer.css'
import { useState, useEffect } from 'react'
import End from './end/End'
import Break from './break/Break'
import store from '../../app/store'
import useWebSocket, {ReadyState} from 'react-use-websocket';
import { useDispatch } from 'react-redux'
import { setTimers } from '../../app/store/time'
import { setProg } from '../../app/store/programme'
import { setTeams } from '../../app/store/teams'
import { setCurrent } from '../../app/store/current'

export default function Viewer ({currentView}) {
  const [isHost, setIsHost] = useState(false);
  const dispatch = useDispatch();

  const { sendJsonMessage } = useWebSocket('ws://localhost:8080', {
    onOpen: () => {
      if (!isHost) {
        sendJsonMessage("please");
      }
    },
    onMessage: (event) => {
      const json = JSON.parse(event.data);
      if (
        json === 'please' && 
        isHost
        ) {
        console.log("Please receive");
        sendJsonMessage(store.getState());
      }
      if (
        !isHost &&
        json != "please" &&
        json != {} &&
        json != null
        ) {
          setStore(json);
      }
    },
    shouldReconnect: (closeEvent) => true,
  })

  const setStore = (json) => {
    const {current, prog, teams, time} = json;
    dispatch(setTimers(time));
    //dispatch(setTeams(teams));
    dispatch(setProg(prog));
    dispatch(setCurrent(current));
  }

    function selector() {
        switch(currentView) {
            case 'score':
                return <Score/>
            case 'temps-morts':
                return <Break/>
            case 'mi-temps' :
                return <MiTemps/>
            case 'fin-du-match' :
                return <End/>
            default :
                return <Score/>
        }
    }

    return (
        <div>
            <div className='Viewer-container'>
                {selector()}
            </div>
        </div>
        
    )
}