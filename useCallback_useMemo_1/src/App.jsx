import { useEffect, useState } from "react"
import { useCounter } from "./useCounter"

export function App() {
    const {value, useIncrease}= useCounter(0, 1)


    return(
    <>
    <h4>Count:<span>{value}</span>
    </h4>
    <br/>
    <button onClick={()=> useIncrease()}>increase</button>

    </>
    )
}