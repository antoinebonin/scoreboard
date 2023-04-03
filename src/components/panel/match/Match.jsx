import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectTeamFn, selectDay } from '../../../app/store/current.js'
import { addScore } from '../../../app/store/programme.js';


export default function Match () {
    const programme = useSelector((state) => state.prog);    
    const teams = useSelector((state) => state.teams.teams);
    const current = useSelector((state) => state.current);
    const dispatch = useDispatch();
    const [currentMatch, setCurrentMatch] = useState({index: 0});
    const [currentDay, setCurrentDay] = useState(0);

    useEffect(() => {
        selectGame(0);
    }, [currentDay])

    function handleChange(event) {
        selectGame(event.target.value);
    } 

    function selectGame(index) {
        const matchData = programme[getDayFromIndex(currentDay)][index];
        const {...match} = matchData
        match.index = index;
        setCurrentMatch(match);
        const team1 = teams[match.teamId[0]];
        const team2 = teams[match.teamId[1]];
        dispatch(selectTeamFn({team: 0, data: team1}));
        dispatch(selectTeamFn({team: 1, data: team2}));
    }

    function handleChangeDay(event) {
        const day = parseInt(event.target.value);
        setCurrentDay(day);
        dispatch(selectDay({day: day}));
    }

    function saveGame() {
        dispatch(addScore({
            day: getDayFromIndex(currentDay),
            index: currentMatch.index,
            score: `${current.teams[0].score} - ${current.teams[1].score}`
        }))
    }

    function getDayFromIndex(index) {
        const days = ['vendredi', 'samedi', 'dimanche']
        return days[index]
    }

    return (
        <div className="Match-panel-container">
            Jour : <br />
            <select onChange={(e) => handleChangeDay(e)}>
                <option value="0">Vendredi</option>
                <option value="1">Samedi</option>
                <option value="2">Dimanche</option>
            </select> <br />
            Match : <br />
            <select onChange={(e) => handleChange(e)}>
                {programme[getDayFromIndex(current.day)].map((el, index) => {
                    return <option key={index} value={index}> {teams[el.teamId[0]].name} - {teams[el.teamId[1]].name}</option>
                })}
            </select>
            <button onClick={() => selectGame(currentMatch.index)}>Réinitialiser le match</button>
            <button onClick={() => saveGame()}>Sauvergarder le résultat</button>
        </div>
    )
}