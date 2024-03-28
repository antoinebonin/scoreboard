import { useSelector } from 'react-redux'
import './Match.css'

export default function Match ({match}) {
    const teams = useSelector((state) => state.teams.teams);

    const startStyle = {textAlign:'start'}
    const endStyle = {textAlign:'end'}

    return (
        <div className="Match-container">
            <div className='Match-img-container'>
                <img src={teams[match.teamId[0]].logo}/>
            </div>
            <div className="Match-text-container">
                <p className='Match-team-name' style={startStyle}>
                    {teams[match.teamId[0]].name}
                </p>
                <p>
                    {match.score ? match.score : match.timeStart}
                </p>
                <p className='Match-team-name' style={endStyle}>
                    {teams[match.teamId[1]].name}
                </p>
            </div>
            <div className='Match-img-container'>
                <img src={teams[match.teamId[1]].logo}/>
            </div>
        </div>
    )
}