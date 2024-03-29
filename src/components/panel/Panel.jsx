import Team from "./teams/Team";
import Timer from "./timer/Timer";
import './Panel.css'
import Match from "./match/Match";
import Programme from "./programme/programme";
import { useState } from "react";

export default function Panel () {

    const [progOpen, setProgOpen] = useState(false);

    const handleProgOpen = () => {
        console.log(progOpen);
        setProgOpen(!progOpen)
    }

    return (
        <>
        <div className="Panel-container">
            <Match/>
            <Team index={0}/>
            <Team index={1}/>
            <Timer/>
        </div>
        <button onClick={() => handleProgOpen()}>{progOpen ? "Fermer" : "Ouvrir"} le programme</button>
        { progOpen && <Programme/>}
        </>
    )
}