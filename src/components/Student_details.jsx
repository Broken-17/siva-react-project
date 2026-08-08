function Student_details({nm,id,role,cr}) {

    const time = "9:30am - 6:30pm";

    const lineStyle = {
        margin : '8px 4px'
    }
    
    return (
        <div className="sd">
            <>
                <img className="pp" height="110" width='110' src="alt-img.jpg"></img>
            </>
            <>
                <div style={lineStyle}>Name : {nm} </div>
                <div style={lineStyle}>Id : {id} </div>
                <div style={lineStyle}>Role : {role} </div>
                <div style={lineStyle}>Course : {cr} </div>
                <div style={lineStyle}>Timings : {time} </div>
            </>
        </div>
    );
}

export default Student_details;