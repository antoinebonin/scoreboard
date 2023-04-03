import Panel from './components/panel/Panel'
import store from './app/store'
import { useState, useEffect } from 'react';
import useWebSocket, {ReadyState} from 'react-use-websocket';

export default function App() {
  const [isHost, setIsHost] = useState(true);

  function handleSetIsHost(event) {
    setIsHost(event.target.value === 'O')
  }

  

  const { sendJsonMessage, lastMessage, lastJsonMessage, readyState } = useWebSocket('ws://localhost:8080', {
    onMessage: (event) => {
      const json = JSON.parse(event.data);
      if (
        json === 'please' && 
        isHost
        ) {
        console.log("Please receive");
        sendJsonMessage(store.getState());
      }
    },
    shouldReconnect: (closeEvent) => true,
  })

  useEffect(() => {
    const unsuscribe = store.subscribe(() => {
      if (readyState === ReadyState.OPEN && isHost) {
        sendJsonMessage(store.getState());
      }
    })
    return unsuscribe;
  }, [isHost, readyState]);


  return (
    <div className="App">
      <select onChange={(e) => handleSetIsHost(e)}>
        <option value="N">Non</option>
        <option value="O">Oui</option>
      </select>
      {isHost && <Panel/>}
    </div>
  )
}

