import { useEffect, useMemo, useRef, useState } from "react"




export function FetchUsers() {
    const [users, setUsers]= useState([])
    let fetched= useRef(false)
    
    async function FetchData() {
        const call= await fetch(`https://freetestapi.com/api/v1/users?limit=20`)
        const response= await call.json()
        return ( call.status === 200 ? response : console.log(`comunication error: ${call.status}`) )
    }

    useEffect(()=>{

        (!fetched.current && 
            FetchData().then(data=> {
                data && data.map((user)=>{
                    let userData= {id: user.id, name: user.name, age: user.age};
                    setUsers(users=> [...users, userData])
                })      
            })
        )

        return(()=> fetched.current= true)
    },[]) 
    
    
    
    return(
        <>
        {users.length && users}
        </>
    )
}