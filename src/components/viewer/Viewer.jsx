import Score from './teams/Score'
import MiTemps from './mi-temps/MiTemps'
import './Viewer.css'
import { useState, useEffect } from 'react'
import End from './end/End'
import Break from './break/Break'

export default function Viewer () {
    const [currentView, setCurrentView] = useState("score");

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

    function handleChange(event) {
        setCurrentView(event.target.value)
    }

    function selectView(event) {
        if (event.altKey === true && event.keyCode === 77) {
            setCurrentView("score")
        }
        if (event.altKey === true && event.keyCode === 66) {
            setCurrentView("temps-morts")
        }
        if (event.altKey === true && event.keyCode === 72) {
            setCurrentView("mi-temps")
        }
        if (event.altKey === true && (event.keyCode === 69 || event.keyCode === 83 || event.keyCode === 73)) {
            setCurrentView("fin-du-match")
        }
    }
    

    useEffect(() => {
        function handleKeyPress(e) {
            selectView(e)
        }

        document.addEventListener('keydown', handleKeyPress);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyPress);
        }
      }, [currentView]);

    return (
        <div>
            <div className='Viewer-container'>
                {selector()}
            </div>
            <select value={currentView} onChange={(e) => handleChange(e)}>
                <option value="score">Match</option>
                <option value="temps-morts">Temps morts</option>
                <option value="mi-temps">Mi temps</option>
                <option value="fin-du-match">Fin du match</option>
            </select>
        </div>
        
    )
}