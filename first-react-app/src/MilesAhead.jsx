
import {useState} from 'react';

const MilesAhead = () => {
    const [steps, setSteps] = useState(0);
    const increment =() => {
        setSteps(prev => prev +1);
    
    }
    return( 
    <>
        <p>today you've taken {steps} steps!</p>
        <br />
        <button onClick={increment}> I have taken another step</button>
    </>
);
}
export default MilesAhead;