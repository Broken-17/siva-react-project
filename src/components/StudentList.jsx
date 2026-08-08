import { useEffect, useState } from 'react';
import '../App.css'
import StdDtl from './Student_details'

function StudentList() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        console.log("fetching has started")

        async function loadUsers() {
            let data = await fetch("https://jsonplaceholder.typicode.com/users/");
            console.log("fetching has completed !");
            let jsonData = await data.json();
            console.log(users);
            setUsers(jsonData);
        }

        loadUsers();
        console.log("Student List Component as called !!");
    },[]);


    return (
        <div id="center">
            {users.map((u) => (
                <StdDtl nm={u.name} id={u.id} cr={u.website} role={u.email} />
            ))}
        </div>
    );
}

export default StudentList;