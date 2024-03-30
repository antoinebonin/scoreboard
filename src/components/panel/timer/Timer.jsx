import { addTime, subTime, setTime, subQuarter, addQuarter } from '../../../app/store/time.js'
import { resetFools } from '../../../app/store/current.js'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import './Timer.css'

export default function Timer () {
    const timer = useSelector((state) => state.time.timers[0]);
    const dispatch = useDispatch();
    const [active, setActive] = useState(false)

    useEffect(() => {
        let interval = null;
        if (active) {
          interval = setInterval(() => {
            dispatch(subTime({timer: 0}))
          }, 1000);
        } else if (!active && timer.count !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, timer]);

    function NtoT(int) {
        const min = ~~(int/60);
        const sec = int % 60;
        return `${min}:${sec}`
    }

    function toogleTimer(event) {
        if (event.altKey === true && event.keyCode === 32) {
            setActive(!active);
        }
    }

    const handleChangeQuarter = () => {
        dispatch(resetFools())
        dispatch(addQuarter({timer: 0}))
    }
    

    useEffect(() => {
        function handleTimer(e) {
            toogleTimer(e)
        }

        document.addEventListener('keydown', handleTimer);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleTimer);
        }
      }, [active]);

    return (
        <div className='Timer-container'>
            <div>
                <p>Time : {NtoT(timer.count)}</p>
                <button
                onClick={() => setActive(!active)}>
                    { active ? "Stop" : "Start"}
                </button>
                <button
                onClick={() => dispatch(setTime({timer: 0, time: 480}))}>
                    Clear
                </button>
                <button
                onClick={() => dispatch(subTime({timer: 0}))}>
                    -1
                </button>
                <button
                onClick={() => dispatch(addTime({timer: 0}))}>
                    +1
                </button>
            </div>
            <div>
                <p>Quarter : {timer.quarter}</p>
                <button
                onClick={() => dispatch(subQuarter({timer: 0}))}>
                    -1
                </button>
                <button
                onClick={() => handleChangeQuarter()}>
                    +1
                </button>
            </div>
        </div>
    )
}