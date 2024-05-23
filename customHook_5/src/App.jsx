import { createRoot } from "react-dom/client"

import { useGeolocation } from "./useGeolocation"
import { useState } from "react"

export function App(){
    const [request, setRequest]= useState(false)
    const{currentLocation}= useGeolocation()

    function handleRequest(event) {
        event.preventDefault()
        setRequest(true)
    }
   


    return(
        <div>
        <h2>get your position</h2><button name="coordiantes" onClick={handleRequest}>find yourself</button>
        {request && <h4>Your coordinates: {currentLocation} </h4>}
        </div>
    )

}

createRoot(document.getElementById("root")).render(<App/>)