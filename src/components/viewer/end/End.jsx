import { useState } from 'react';
import Prog from '../programme/Prog';
import './End.css'

export default function End () {
 const [minutes, setMinutes] = useState(0);
 const [hours, setHours] = useState(0);

    function doubleDigits(int) {
        return int < 10 ? `0${int}` : int;
    }

    setInterval(() => {
        setMinutes(new Date().getMinutes())
        setHours(new Date().getHours())
    }, 1000)

    return (
        <div>
            <Prog/>
            <div className='MiTemps-time'>{doubleDigits(hours)}h{doubleDigits(minutes)}</div>
        </div>)
}

//             
