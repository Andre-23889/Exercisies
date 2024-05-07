import { useState } from "react"




export function Login(){

    const[data, setdata]=useState({})

        function handleLogin(event) {
            
            event.preventDefault()

/*             console.dir(event.target[2])
            const username=  event.target[0].value
            const password= event.target[1].value
            const  remember= event.target[2].checked *

            let inputData={
                username,
                password,
                remember: (remember === true)? "yes" : "no"
            }*/

            let inputData= new FormData(event.target)
            let data={
                username: inputData.get("username"),
                password: inputData.get("password")
            }

            setdata(data)

        }


    return(
        <div>
            <div>
                <form onSubmit={handleLogin}>
                <label htmlFor="userName">username:</label>
                <input type="text" name="username" ></input>
                <br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" ></input>
                <br/>
                <label htmlFor="remeber">would you like a fastest login?:</label>
                <input type="checkbox" name="remember"  ></input>
                <br/><br/>

                <button name="send" type="submit">Login</button>
                <button name="clear" type="reset" >Reset</button>
                </form>
            </div>
            <br/><br/>
            <pre>{JSON.stringify(data,null,"> ")}</pre>
        </div>
    )
}