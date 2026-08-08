
import Counter from '../components/Counter'
import SC from '../components/ShowBtn'
import { useState } from 'react';

function Services(){
    const [showCounter , setShowCounter] = useState(false)
    return(
    <>
        <SC showCounter={showCounter} setShowCounter={setShowCounter} />
        <br />
        <Counter />
        <center>
            <h1>
                Services Page got loaded and git is updating this
            </h1>
        </center>
    </>
    );
}

export default Services