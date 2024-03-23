import {useSelector} from "react-redux";
import ProgLine from "./programmeLine";
import {useState} from "react";


export default function Programme() {
    const programme = useSelector((state) => state.prog);

    const [gymnase, setGymnase] = useState('st-rom')

    const handleChangeGymnase = (event) => {
        setGymnase(event.target.value)
    }

    return (
        <div>
            <h1>Gestion des matchs</h1>
            <select value={gymnase} onChange={event => handleChangeGymnase(event)}>
                <option value="st-rom">St Rom</option>
                <option value="ampuis">Ampuis</option>
                <option value="revent">Reventin</option>
            </select>
            <div className="container-match">
                {Object.keys(programme).map((jour, indexJour) => {
                    return (
                        <div key={indexJour} className="container-day">
                            <p><strong>{jour}</strong></p>
                            {programme[jour].map((match, index) => {
                                if (match.gymnase === gymnase) {
                                    return <ProgLine
                                        key={index}
                                        day={jour}
                                        index={index}
                                        match={match}>
                                    </ProgLine>
                                }

                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}