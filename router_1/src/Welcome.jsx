function Age ({age}) {

    return(
        <h4>your age is: {age}</h4>
    )
}


export function Welcome ({user, age}) {

    return(
        <div>
            <h2>Welcome, {user}!</h2>
            <Age age={age}/>
        </div>
    )
}