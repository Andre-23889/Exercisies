import { createRoot } from "react-dom/client";
import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function App(){
    const [digit, setDigit]= useState(null)
    const {data, error}= useGithubUser(digit)
    
    


    function handleInput(event){
        event.preventDefault()
        setDigit( event.target[0].value)
    }

    

    function handleOutput() {
        if(data){return <h2>welcome{data.login}!</h2>}
        else if(!digit) {return<p>please digit a name</p>}
        else if(!error) {return<h4>loading...</h4>};

        if(error) {}
    }
    
    
    return(
        <div>
            <h1>Are u a GitHub user?</h1>
            <br/>
            <form onSubmit={handleInput}>
                <input name="searchUser" type="text"/>
                <button type="submit">search</button>
            </form>
            <br/><br/>

            {error&& <p style={{ color:"red"}}>sorry, something wrong happen: {error.message} </p>}

            {handleOutput()}
        </div>
    )
       
}

createRoot(document.getElementById("root")).render(<App/>)