import { useState } from "react"; // import the useState

function Counter(){

    const [Count , newCount] = useState(0); // declaration
    const [user , chngUser] = useState("Guest");

    let incr = () => {
        newCount(Count+1);
    }
    let dscr = () => {
        newCount(Count-1);
    }


    return(
        <div>
            <center>
                <h1> Hello {user}</h1>
                <p>Count : {Count}</p>
                <button onClick={ () => {incr()}} >Increase</button>          
                <button onClick={ () => {dscr()}} >Decrease</button>
                <br /><br />
                <input type="text" placeholder="Enter new User Name"
                onChange={() => {chngUser(event.target.value || "Guest")}} />
            </center>
        </div>
    );
}

export default Counter