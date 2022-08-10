import Fool from './Fool'
import './Fools.css'

export default function Fools ({fools}) {

    function isActive (index) {
        return fools >= index
    }

    return (
        [1,2,3,4,5].map( (el, index) => {
            return <Fool key={index} state={isActive(el)}/>
        })
    )
}