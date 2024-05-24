import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList () {
    const [users, setUsers]= useState()
    const [status, setStatus]= useState()

    useEffect(()=>{ 
        fetch(`https://api.github.com/users`)
        .then(response=>{ setStatus(response.status); return response.json()})
        .then(data=> {
            setUsers(data)
        })
    },[])

    console.log(status, users);

    return(
        <div>
              {users && users.map((user)=> 
                <Link to={'/gitUser/' + user.login}><p>{user.login}</p></Link>
            )} {/* problema del doppio parametro? guardare il log */}
        </div>
    )
}