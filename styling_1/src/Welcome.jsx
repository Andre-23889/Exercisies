import { Age } from "./Age";
import "./style/index.css"

export function Welcome({userName="Mario", age}){
    return(
        <div className={"welcome"}>
            <p>Welcome, {userName}!  </p>
            {!!age && age > 18 && age < 65 && userName === "John"? <Age age={age}/> : <p>You're not my John! Who're you, {userName}? </p>}
        </div>
    )
    }