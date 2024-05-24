import { useState } from "react"


function onLogin(input) {

    let rendering= {}
    
    rendering.name= input.target[0].value
    rendering.password= input.target[1].value
    rendering.remember= input.target[2].checked

    console.log(rendering);
    
    return(
     rendering
    )
}



export function Login() {
    const [loginState, setLoginState]=useState({})
    const [user, setUser]= useState("")
    const [pw, setPw]= useState("")


    function handleLogin(event) {
        event.preventDefault()

        setLoginState(()=> onLogin(event))
    }

    function reset(){
        setUser("")
        setPw("")
        setLoginState({})
    }


    

    function inputCheck(e) {
        if(e.currentTarget.name === "username") 
            {setUser(e.target.value)}else
        if (e.currentTarget.name === "password") 
            {setPw( e.target.value )}
    }
   
    return(
        <div>
            <div>
                <form onSubmit={handleLogin}>
                <label htmlFor="userName">username:</label>
                <input type="text" name="username" value={user} onChange={inputCheck}></input>
                <br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" value={pw} onChange={inputCheck}></input>
                <br/>
                <label htmlFor="remeber">would you like a fastest login?:</label>
                <input type="checkbox" name="remember" ></input>
                <br/><br/>
                <button name="send" type="submit" disabled={!user || !pw}>Login</button>
                <button name="clear" type="reset" onClick={reset}>Reset</button>
                </form>
            </div>
            <div>
            <p>Welcome {loginState.name}!</p>
            {console.log(loginState)}
            </div>    
        </div>
    )
}