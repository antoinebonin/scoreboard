import './Fools.css'

export default function Fool ({state}) {

    function classActive() {
        return state ? "fool active" : "fool";
    }

    return (<div className={classActive()}></div>)
}