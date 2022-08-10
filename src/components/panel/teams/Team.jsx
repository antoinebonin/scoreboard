import { addScore, subScore, addFools, subFools, selectColor } from '../../../app/store/current.js'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

export default function Team ({index}) {
    const team = useSelector((state) => state.current.teams[index]);
    const dispatch = useDispatch();

    const [currentColor, setCurrentColor] = useState(0);

    function handleChange(event) {
        setCurrentColor(event.target.value);
        dispatch(selectColor({team:index, color:event.target.value}))
    }

    return (
        <div>
            <div>
                {team.data.name}
                <select onChange={(e) => handleChange(e)}>
                    <option value="0">Couleur 1</option>
                    <option value="1">Couleur 2</option>
                </select>
            </div>
            <div>
                Points :  
                <button
                    onClick={()=> dispatch(addScore({team: index, score: 1}))}>
                    +1
                </button>
                <button
                    onClick={()=> dispatch(addScore({team: index, score: 2}))}>
                    +2
                </button>
                <button
                    onClick={()=> dispatch(addScore({team: index, score: 3}))}>
                    +3
                </button>
                <button
                    onClick={()=> dispatch(subScore({team: index, score: 3}))}>
                    -3
                </button>
                <button
                    onClick={()=> dispatch(subScore({team: index, score: 2}))}>
                    -2
                </button>
                <button
                    onClick={()=> dispatch(subScore({team: index, score: 1}))}>
                    -1
                </button>
            </div>
            <div>
                Fautes :  
                <button
                    onClick={()=> dispatch(addFools({team: index, fools: 1}))}>
                    +1
                </button>
                <button
                    onClick={()=> dispatch(subFools({team: index, fools: 1}))}>
                    -1
                </button>
            </div>
        </div>
    )
}