import { useState } from "react"



export function Login({onLogin}){

    const[data, setdata]= useState({
    user: "",
    pass: "",
    save: false
    })


        function input(event){
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

        function takeData() {
        onLogin(data) 
        // non ho capito questa parte, è una callback di una funzione che può essere scritta in un altro file?
        //  e questa funzione riceve come parametro data;
        //  per rendere la sua logica nel momento del caricamentodi questo componenete?
        }


       /*  function onLogin(data){   
            <pre>{JSON.stringify(data,["user", "pass"],"> ")}</pre>
        } */
        
        function reset(){
            setdata({   
            user: "",
            pass: ""})
        }

   
    return(
        <div>
            <form>
                <label htmlFor="userName">username:</label>
                <input type="text" name="username"value={data.user} onChange={input}></input>
                <br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" value={data.pass} onChange={input}></input>
                <br/>
                <label htmlFor="remeber">would you like a fastest login?:</label>
                <input type="checkbox" name="remember" checked={data.save} onChange={input}></input>
                <br/><br/>
                <button name="send" onClick={takeData} disabled={!data.user || !data.pass}>Login</button>
                <button name="clear" type="reset" onClick={reset}>Reset</button>

                <pre>{JSON.stringify(data,["user", "pass"],"> ")}</pre> 
            </form>
        </div>
    )
}