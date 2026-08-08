function ShowBtn({showCounter,setShowCounter}){
    
    function chkTgl(){
        let sc = (showCounter == false) ? true : false ;
        setShowCounter(sc)
    }

    return(
        <>
        <button className="cntr-btn" onClick={() => {chkTgl()}}> Show Counter</button>
        </>
    );
}
export default ShowBtn