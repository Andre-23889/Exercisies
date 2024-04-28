import { Age } from "./Age";

export function Welcome({userName="Mario", age}){
    return(
        <div>
            <p>Welcome, {userName}!</p>
            {/*{!!age && <Age age={age}/>}
            {!!age && age > 18 ? <Age age={age}/> : undefined}
            {!!age && age > 18 && age < 65 ? <Age age={age}/> : undefined}
            {!!age && age > 18 && age < 65 && userName === "John"? <Age age={age}/> : undefined} */}
            {!!age && age > 18 && age < 65 && userName === "John"? <Age age={age}/> : <p>You're not my John! Who're you, {userName}? </p>}
            
        </div>
    )
    }