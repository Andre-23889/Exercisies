import { useState } from "react"

export function useCounter (initialValue=0, operator=0) {
    const [value, setValue] = useState(initialValue)


    console.log(initialValue, operator);
    console.log(value);


    const increaseValue= function handleIncreaseValue () {
        setValue((value)=> {return value + operator})
    }
    const decreaseValue= function handleDecreaseValue () {
        setValue((value)=> {return value - operator})
    }
    const resetValue= function handleResetValue() {
        setValue(initialValue)
    }


    return{
        value: value,
        increaseValue: increaseValue,
        decreaseValue:decreaseValue,
        resetValue: resetValue
    }
}