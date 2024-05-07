import { createRoot } from "react-dom/client";
import { GithubUser } from "./GithubUser";
import { useState } from "react";

export function App(){
    const [digit, setDigit]= useState("user")

    function handleInput(event){
        event.preventDefault()
        setDigit(event.target[0].value) 
    }

    

    return(
        <div>
            <h1>Are u a GitHub user?</h1>
            <br/>
            <form onSubmit={handleInput}>
                <input type="text"/>
                <button type="submit">search</button>
            </form>
            <br/><br/>
             <GithubUser userInput={digit}/>
        </div>
    )
       
}

createRoot(document.getElementById("root")).render(<App/>)