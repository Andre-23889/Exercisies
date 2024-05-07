import { StrictMode, useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import {CounterLogic} from "./CounterLogic"


function App(){

    const [data,setData]= useState("x")
    const focusOn= useRef()
    
    useEffect(()=>{
        focusOn.current?.focus(); 
        console.log(focusOn.current.value); 
        if (focusOn.current.value == "x") {console.log("first mount")} else{console.log("mount")};
        return ()=>{focusOn.current.value= ""}
    },[])

    function typing(event){
        setData(event.target.value)
    }

    return(
        <div>
            <input type="text" name="input" ref={focusOn} value={data} onChange={typing}></input>
            <br /><br /><br />
            <CounterLogic />
        </div>
    )
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>)