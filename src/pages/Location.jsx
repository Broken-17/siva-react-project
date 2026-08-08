/*

1. creating Context
2. provider
3. Consumer

*/
import Temp from '../components/TempCom'
import { ConLocation } from '../context/ConLocation'

function Location() {

    return (
        <>
            <ConLocation.Provider> 
                <Temp />
            </ConLocation.Provider>

        </>
    );

}

export default Location