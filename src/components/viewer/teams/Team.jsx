import Fools from "./Fools"
import './Team.css'

export default function Team ({team}) {

    return (
        <div className='Team-container'>
            <div className="Team-name-fools-container">
                <p className='Team-name'>{team.data.name}</p>
                <div className="Team-fools">
                    <Fools fools={team.fools}/>
                </div>
            </div>
            <div className='Team-img-container'>
                <img src={team.data.logo}/>
            </div>
            <div className='Team-color' style={{'backgroundColor': team.data.colors[team.selectedColor]}}></div>
            <p className='Team-score'>{team.score}</p>
        </div>
    )
}