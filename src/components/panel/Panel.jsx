import Team from "./teams/Team";
import Timer from "./timer/Timer";
import './Panel.css'
import Match from "./match/Match";

export default function Panel () {

    return (
        <div className="Panel-container">
            <Match/>
            <Team index={0}/>
            <Team index={1}/>
            <Timer/>
        </div>
    )
}