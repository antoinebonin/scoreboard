import Prog from '../programme/Prog';
import './End.css'

export default function End () {

    function doubleDigits(int) {
        return int < 10 ? `0${int}` : int;
    }

    

    return (
        <div>
            <Prog/>
            <div className='MiTemps-time'>{doubleDigits(new Date().getHours())}h{doubleDigits(new Date().getMinutes())}</div>
        </div>)
}