import { useState } from "react"



export function Login({onLogin}){

    const[data, setdata]= useState({
    user: "",
    pass: "",
    save: false
    })


        function inputData(event){

            let rendering= {...data}

            switch (event.target.name) {
                case "username":
                    rendering.user=event.target.value
                    break;
                case "password":
                    rendering.pass=event.target.value
                    break;
                case "remember":
                    rendering.save=event.target.checked
                    break;
            }
            setdata({ ...rendering})
        }

        function handleLogin(event) {
            
            event.preventDefault()

            onLogin(data) 
            // non ho capito questa parte, è una callback di una funzione che può essere scritta in un altro file?
            //  prende data come paramentro, quindi dovrebbe poter effettuare operazioni con questi dati  
            //  e rendere la sua logica nel momento del caricamento del componenete?
        
            loginData={...data}
           return (
               <pre>{JSON.stringify(loginData,["user", "pass"],"> ")}</pre> 
           )
        }

        function reset(){
            setdata({   
            user: "",
            pass: ""})
        }

   
    return(
        <div>
            <div>
                <form onSubmit={handleLogin}>
                <label htmlFor="userName">username:</label>
                <input type="text" name="username"value={data.user} onChange={inputData}></input>
                <br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" value={data.pass} onChange={inputData}></input>
                <br/>
                <label htmlFor="remeber">would you like a fastest login?:</label>
                <input type="checkbox" name="remember" checked={data.save} onChange={inputData}></input>
                <br/><br/>

                <button name="send" type="submit" disabled={!data.user || !data.pass}>Login</button>
                <button name="clear" type="reset" onClick={reset}>Reset</button>
                </form>
            </div>
            <handleLogin />
        </div>
    )
}