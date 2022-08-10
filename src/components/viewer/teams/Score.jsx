import { useSelector } from 'react-redux'
import Team from './Team';
import './Score.css'

export default function Score () {
    const teams = useSelector((state) => state.current.teams);
    const timer = useSelector((state) => state.time.timers[0]);

    function NtoT(int) {
        const min = ~~(int/60);
        const sec = int % 60;
        return int > 0 ? `${doubleDigits(min)}:${doubleDigits(sec)}` : 'De retour';
    }

    function doubleDigits(int) {
        return int < 10 ? `0${int}` : int;
    }

    return (
        <div className='Score-container'>
            <div className='Score-timer-container'>
                <div className='Score-quarter'>
                    Q{timer.quarter}
                </div>
                <div className='Score-timer'>
                    {NtoT(timer.count)}
                </div>
            </div>
            <div className='Score-score'>
                {teams.map((team, index) => {
                    return (
                        <Team key={index} team={team}/>
                    )
                })}
            </div>
        </div>
    )
}