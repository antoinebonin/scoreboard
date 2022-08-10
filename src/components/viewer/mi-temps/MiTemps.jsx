import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setTime, subTime } from '../../../app/store/time.js'
import Prog from '../programme/Prog';
import './MiTemps.css'

export default function MiTemps () {
    const timer = useSelector((state) => state.time.timers[1]);
    const dispatch = useDispatch();

    useEffect(() => {

        let interval = null;

        if (timer.count === 0) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            dispatch(subTime({timer: 1}))
        }, 1000);

        return () => clearInterval(interval);
    }, [timer])

    useEffect(() => {
        return () => {
            dispatch(setTime({timer:1, time:300}));
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
            <Prog/>
            <div className='MiTemps-time'>{NtoT(timer.count)}</div>
        </div>
    )
}