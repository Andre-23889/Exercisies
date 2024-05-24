import { Age } from "./Age";

export function Welcome({userName="Mario", age}){
    return(
        <div>
            <p>Welcome, {userName}!</p>
            <Age age={age}/>
        </div>
    )
    }