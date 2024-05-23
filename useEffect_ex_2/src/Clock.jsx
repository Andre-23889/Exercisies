import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Clock(){
    const [time, setTime]= useState(new Date())

    useEffect( ()=>{
        
     const timeflow= setInterval(()=>{
        console.log("updating");
        setTime(new Date())
    }, 1000)
    

    return ()=>{
        clearInterval(timeflow)
    }
    },[])


   

    return(
        <div>
            <p> what time is it?</p>
            <p>it's {time.toLocaleTimeString()}</p>
        </div>
    )
}

createRoot(document.getElementById("root")).render(<StrictMode ><Clock /></StrictMode >)