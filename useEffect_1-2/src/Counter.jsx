import { useState } from "react"
import { Link } from "react-router-dom"

function CounterDisplay ({value}){

    return(
        <h2>Count: {value}</h2>
    )
}

export function Counter () {
    const [counter, setCounter]= useState(0)

    function handleIncrement() {
        setCounter(()=> counter +1)
    }

    function handleDecrement() {
        setCounter(()=> counter -1)
    }

    function handleReset() {
        setCounter(0)
    }



    return(
        <>
        <CounterDisplay value={counter} />
        <br/><br/>
        <button name="increment" onClick={handleIncrement}>+1</button>
        <button name="decrement" onClick={handleDecrement}>-1</button>
        <button name="reset" onClick={handleReset}>reset</button>
        <br/><br/>
        {/* <p>
            <Link to="/">homepage</Link>
        </p> */}
        </>
    )
}