import { useEffect, useState } from "react"
import { Login } from "./Login_uncontrolled";

export function InteractiveWelcome() {

    const [name, setName]= useState("")



    function eventController(){
        console.dir(event)
        setName(event.target.value)
    }


   return(
        <div>
            <h4>Please, login</h4>
            <Login/>
            <p>Welcome {name}!</p>
            <input type="text" value={name} onChange={eventController}></input>
        </div>
   ) 
}


