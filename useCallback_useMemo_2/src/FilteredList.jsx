import { useEffect, useMemo, useState } from "react"


export function FilteredList ({data}){

    const [list, setList]= useState([])

    const filter= useMemo(()=>
        {data && data.map((user)=>{  
        if(user.age >= 18){return setList(prev=>[ ...prev, {name:user.name, age:user.age}])}
    })}, [data])
    
    return(
        <>
            {console.log(list)}
            {list.map((user=> <p>{user.name}, age:{user.age}</p>))}
        </>
    )
}