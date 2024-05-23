import { createRoot } from "react-dom/client";
import {  useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function App(){
    const [digit, setDigit]= useState("user")
    const [username, error]= useGithubUser(digit)

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
            {username ? <h2>welcome {username}</h2>: error}
        </div>
    )
       
}

createRoot(document.getElementById("root")).render(<App/>)