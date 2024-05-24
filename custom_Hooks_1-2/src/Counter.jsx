
import { createRoot } from "react-dom/client"
import { useCounter } from "./useCounter"

export function Counter () {
    const {value, increaseValue, decreaseValue, resetValue}= useCounter (0, 2)


    return(
        <div>
            <h3>Counter: {value}</h3>
            <button onClick={increaseValue}>increase</button>
            <button onClick={decreaseValue}>decrease</button>
            <button onClick={resetValue}>reset</button>
        </div>
    )
}

createRoot(document.getElementById("root")).render(<Counter/>)