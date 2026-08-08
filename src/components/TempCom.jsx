import { useContext } from "react";
import { ConLocation } from '../context/ConLocation'


function TempComp(){
    
    const Location = useContext(ConLocation);

    return(
        <>        
        <center>
                <h1>
                    Location : { /* location */ }
                </h1>
        </center>
        </>
    );
}

export default TempComp