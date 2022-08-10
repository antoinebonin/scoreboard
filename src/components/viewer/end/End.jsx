import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setTime, subTime } from '../../../app/store/time.js'
import Prog from '../programme/Prog';
import './End.css'

export default function End () {
    const timer = useSelector((state) => state.time.timers[2]);
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
            <Prog/>
            <div className='MiTemps-time'>{doubleDigits(new Date().getHours())}h{doubleDigits(new Date().getMinutes())}</div>
        </div>)
}