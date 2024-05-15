import { useState } from "react"
import {Clock} from "./AlertClock"
import { createRoot } from "react-dom/client"

export function App(){
    const [show, setShow]= useState(false)

    function showTime(){
        setShow( !show)
    }

    return(
        <div>
            <p> what time is it?</p>
            <button type="button" onClick={showTime}>Show</button>
            <br/>
            < Clock show={show}/>
        </div>
    )
}

createRoot(document.getElementById("root")).render(<App />)