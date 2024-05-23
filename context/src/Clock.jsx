import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext"

export function Clock (){
    const [time, setTime]= useState(new Date())
    const [randomColor, setRandomColor] = useState("rgb(0, 0, 0");
    const [language, setLanguage] = useState("en") 

    
    useEffect( ()=>{
        let second= setInterval(()=>{
            setTime(new Date(), 
            setRandomColor(generateRandomRGB()))
        },1000)

        return()=>{ clearInterval(second)}
    },[])


    function handleLanguage(event) {
        setLanguage(event.target.value)
    }
    console.log(language);

    function generateRandomRGB () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
    
        return `rgb(${r}, ${g}, ${b})`;
      };
    

    return(
        <div>
            <LanguageContext.Provider value={language}>
            <div>
                {language === "en" && <h3>actual time:</h3>}
				{language === "it" && <h3>ora attuale:</h3>}
            </div>
            <div>
                <select name="language" onChange={handleLanguage}>
                <option value="en">en</option>
                <option value="it">it</option>
                </select>
            </div>
            <div >
                {language === "en" && 
                        <>
                            <p> what time is it?</p>
                            <p style={{ border:`3px inset ${randomColor}`}} >it's {time.toLocaleTimeString()}</p>
                        </>
                }

                {language === "it" &&
                        <>
                            <p> che ore sono?</p>
                            <p style={{ border:`3px inset ${randomColor}`}} >sono le {time.toLocaleTimeString()}</p>
                        </>
                }
            </div>
            </LanguageContext.Provider>
        </div>
    )
}