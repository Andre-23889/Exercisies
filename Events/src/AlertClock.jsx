import { useEffect, useState } from "react";

export function Clock ({show}){
    const [time, setTime]= useState(new Date())
    console.log(show);
    

    useEffect( ()=>{
        
            let timeFlow= setInterval(()=>{
                if (show){ setTime(new Date())}else {clearInterval(timeFlow)};
                console.log(time);
            },1000)

            return(()=> clearInterval(timeFlow))
        
    },[time, show])

    return(
        <div>
            {show && <p>it's {time.toLocaleTimeString()}</p>}
        </div>
    )
}
