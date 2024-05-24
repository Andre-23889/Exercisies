import { useEffect, useState } from "react";

export function Clock (){
    const [time, setTime]= useState(new Date())
    const [randomColor, setRandomColor] = useState("rgb(0, 0, 0");

    useEffect( ()=>{
        let second= setInterval(()=>{
            setTime(new Date(), 
            setRandomColor(generateRandomRGB()))
        },1000)

        return()=>{ clearInterval(second)}
    },[])
   

    const generateRandomRGB = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
    
        return `rgb(${r}, ${g}, ${b})`;
      };
    

    return(
        <div style={{ backgroundColor: randomColor }}>
            <p> what time is it?</p>
            <p >it's {time.toLocaleTimeString()}</p>
        </div>
    )
}