import { useSelector } from 'react-redux'
import Match from './Match';
import './Prog.css'

export default function Prog () {
    const programme = useSelector((state) => state.prog);
    const current = useSelector((state) => state.current);

    function getDayFromIndex(index) {
        const days = ['vendredi', 'samedi', 'dimanche']
        return days[index]
    }

    function getDay(index) {
        return index > 2 ? 3 : index
    }

    return (
        <div className='Prog-container'>
            <p className='Prog-header'>Programme du jour en stream</p>
            {programme[getDayFromIndex(getDay(current.day))].map((el, index) => {
                return <Match match={el} key={index}/>
            })}
            {current.day < 2 && <p className='Prog-header'>{getDayFromIndex(current.day + 1)}</p>}
            {current.day < 2 && programme[getDayFromIndex(current.day + 1)].map((el, index) => {
                if (current.day === 0) {
                    return <Match match={el} key={index}/>;
                }
                return (index < 4) ? <Match match={el} key={index}/> : null;
            })}
        </div>
    )
}