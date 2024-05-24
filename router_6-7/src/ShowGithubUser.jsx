import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function ShowGithubUser() {
    const [status, setStatus]= useState()
    const [pic, setPic]= useState()
    const [username, setUsername]= useState()


    let user= useParams().user
    
    useEffect(()=>{ 
            fetch(`https://api.github.com/users/${user}`)
            .then(response=>{ setStatus(response.status); return response.json()})
            .then(data=> {
                console.log(data);
                setPic(data.avatar_url);
                setUsername(data.login)})
    },[user])

    

    return(
        <>
            <p>user:</p>
            
            {status === 200?
                <div className="card">
                <p><strong>{username}</strong></p>
                <img src={pic} className="profilePic" alt= "profile img" />
                </div>
                : <span>"not found"</span>
            }

            <br />
            <hr />

            <Link to={'/gitUser/users'}><button name="back">reset</button></Link>
        </>
    )
}