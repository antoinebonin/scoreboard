import { useSelector } from 'react-redux'
import Match from './Match';
import './Prog.css'
import {useEffect, useState} from "react";

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

    const gymnase = [
        {name: 'Saint Romain en Gal', code: 'st-rom'},
        {name: 'Ampuis', code: 'ampuis'},
    ]

    const [currentGymnase, setCurrentGymnase] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            if (gymnase.length - 1 === currentGymnase) {
                setCurrentGymnase((value) => 0)
            } else {
                setCurrentGymnase((value) => value + 1)
            }
        }, 7500);
        return () => clearTimeout(interval);
    }, [currentGymnase]);



    return (
        <div className='Prog-container'>
            <p className='Prog-header'>Gymnase: {gymnase[currentGymnase].name}</p>
            <p className='Prog-header'>Programme du jour en stream</p>
            {programme[getDayFromIndex(getDay(current.day))].filter(el => el.gymnase === gymnase[currentGymnase].code).map((el, index) => {
                return <Match match={el} key={index}/>
            })}
            {current.day < 2 && <p className='Prog-header'>{getDayFromIndex(current.day + 1)}</p>}
            {current.day < 2 && programme[getDayFromIndex(current.day + 1)].filter(el => el.gymnase === gymnase[currentGymnase].code).map((el, index) => {
                if (current.day === 0) {
                    return <Match match={el} key={index}/>;
                }
                return (index < 4) ? <Match match={el} key={index}/> : null;
            })}
        </div>
    )
}