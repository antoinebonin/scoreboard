import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setTime, subTime } from '../../../app/store/time.js'
import Prog from '../programme/Prog';
import './Break.css'

export default function Break () {
    const timer = useSelector((state) => state.time.timers[2]);
    const current = useSelector((state) => state.current);
    const dispatch = useDispatch();

    useEffect(() => {

        let interval = null;

        if (timer.count === 0) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            dispatch(subTime({timer: 2}))
        }, 1000);

        return () => clearInterval(interval);
    }, [timer])

    useEffect(() => {
        return () => {
            dispatch(setTime({timer:2, time:60}));
        }
    }, [])

    function NtoT(int) {
        const min = ~~(int/60);
        const sec = int % 60;
        return int > 0 ? `${doubleDigits(min)}:${doubleDigits(sec)}` : 'De retour';
    }

    function doubleDigits(int) {
        return int < 10 ? `0${int}` : int;
    }

    return (
        <div>
            <div className='Break-time'>{NtoT(timer.count)}</div>
            <div className="Break-container">
                <div className="Break-team-container">
                    <img src={current.teams[0].data.logo}/>
                    <p>{current.teams[0].data.name}</p>
                    <p>{current.teams[0].score}</p>
                </div>
                <div className="Break-team-container">
                    <p>{current.teams[1].score}</p>
                    <p>{current.teams[1].data.name}</p>
                    <img src={current.teams[1].data.logo}/>
                </div>
            </div>
        </div>
    )
}