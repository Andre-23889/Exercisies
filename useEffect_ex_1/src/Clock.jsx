import { useEffect, useState } from "react";

export function Clock (){
    const [time, setTime]= useState(new Date())

    useEffect( ()=>{
        let second=0;
    setInterval(()=>{
        second++;
    },1000)
    setTime(new Date())
    },[second])
   
    


    return(
        <div>
            <p> what time is it?</p>
            <p>it's {time.toLocaleTimeString()}</p>
        </div>
    )
}