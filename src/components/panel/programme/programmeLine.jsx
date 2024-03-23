import {useDispatch, useSelector} from "react-redux";
import {setMatch} from "../../../app/store/programme.js"
import "./programmeLine.css"
export default function ProgLine({day, index, match}) {
    const teams = useSelector((state) => state.teams.teams);
    const dispatch = useDispatch();
    const handleChangeTeam = (indexTeam, event) => {
        let teamId = match.teamId.slice(0)
        teamId[indexTeam] = Number.parseInt(event.target.value)
        dispatch(setMatch({
            day: day,
            matchIndex: index,
            value: {...match, teamId : teamId}
        }))
    }

    const handleChangeGymnase = (event) => {
        dispatch(setMatch({
            day: day,
            matchIndex: index,
            value: {...match, gymnase: event.target.value}
        }))
    }

    const handleChangeScore = (event) => {
        dispatch(setMatch({
            day: day,
            matchIndex: index,
            value: {...match, score: event.target.value}
        }))
    }

    const findIndexTeams = (name) => {
        return teams.findIndex((el) => el.name === name)
    }

    return (
        <div className="line">
            <div className="team-1">
                <p>{teams[match.teamId[0]].name}</p>
                <select value={findIndexTeams(teams[match.teamId[0]].name)} onChange={(e) => handleChangeTeam(0, e)}>
                    {teams.map((team, index) => {
                        return <option key={index} value={index}>{team.name}</option>
                    })}
                </select>
            </div>
            <div className="other">
                <p>{match.timeStart}</p>
                <input value={match.score ?? ''} onChange={event => handleChangeScore(event)}></input>
                <select value={match.gymnase} onChange={event => handleChangeGymnase(event)}>
                    <option value="st-rom">St Rom</option>
                    <option value="ampuis">Ampuis</option>
                    <option value="revent">Reventin</option>
                </select>
            </div>
            <div className="team-1">
                <p>{teams[match.teamId[1]].name}</p>
                <select value={findIndexTeams(teams[match.teamId[1]].name)} onChange={(e) => handleChangeTeam(1, e)}>
                    {teams.map((team, index) => {
                        return <option key={index} value={index}>{team.name}</option>
                    })}
                </select>
            </div>
        </div>
    )
}