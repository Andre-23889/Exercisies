import { useState } from "react"

export function Login(){
   const[data, setdata]= useState({
    user_name:"",
    pass:"",
    save: false
   })

    function input(event){
        let rendering= {...data}

        switch (event.target.name) {
            case "username":
                rendering.user_name=event.target.value
                break;

            case "password":
                rendering.pass=event.target.value
                break;

            case "remember":
                rendering.save=event.target.checked
                break;
        }

    setdata({...rendering})
    }

   
    return(
        <div>
            <form>
                <label for="userName">username:</label>
                <input type="text" name="username"value={data.user_name} onChange={input}></input>
                <br/>
                <label for="password">password:</label>
                <input type="password" name="password" value={data.pass} onChange={input}></input>
                <br/>
                <label for="remeber">would you like a fastest login?:</label>
                <input type="checkbox" name="remember" checked={data.save} onClick={input}></input>
            </form>
        </div>
    )
}