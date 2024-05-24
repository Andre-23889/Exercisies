import { createRoot } from "react-dom/client";
import { useGithubUser } from "./useGithubUser";
import { useState } from "react";
import { SWRConfig } from "swr";

export function App(){
    const [input, setInput]= useState('')
    const [typing,setTyping]= useState('')
    const {data, error, onRefresh}= useGithubUser(input)

    function handleInput(event){
        event.preventDefault()
        setInput( event.target[0].value)
    }

    function manageOutput() {
        if(data){return <h2>welcome! {data.login} </h2>}
        else if(!input) {return<p>please digit a name</p>}
        else if(!error) {return<h4>loading...</h4>};

        if(error) {}
    }

    function handleRefresh(e) {
        e.preventDefault()
        setTyping('')
        setInput('')
        onRefresh(`https://api.github.com/users/${input}`)
    }

    
    return(
        
        <div>
            <h1>Are u a GitHub user?</h1>
            <br/>
            <div>
                    <form onSubmit={handleInput}>
                    <input id="searchUser" type="text" value={typing} onChange={(e)=> setTyping(e.target.value)}/>
                    <button type="submit">search</button>
                </form>
                <button onClick={handleRefresh}>refresh</button>
            </div>
           
            <br/><br/>

            {error&& <p style={{ color:"red"}}>sorry, something wrong happen: {error.message} </p>}

            {manageOutput()}
            {console.log(data)}
        </div>
        
    )
}

createRoot(document.getElementById("root")).render(<App/>)