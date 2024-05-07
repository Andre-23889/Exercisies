import { useEffect, useRef, useState } from "react";



export function CounterLogic({ initialValue= 0, incrementBy= 1, decrementBy= 1 }) {
	const [counter, setCounter] = useState(initialValue)

	let countTrack= useRef("")
	let countSave= useRef()


    useEffect(()=>{	

		if ( counter < countSave.current) {
			countTrack= "down", console.log(countTrack)} else 
			if( counter > countSave.current) {
				countTrack= "up", console.log(countTrack)
		}
		console.log(counter, countSave.current);
		 
		return (
			()=>{ countSave.current= counter }
		)
	},[counter])
 


	function eventIncrement() {
		setCounter(counter + incrementBy)
	}

	function eventDecrement() {
		setCounter(counter - decrementBy)
	}

	function eventReset() {
		setCounter((counter)=> counter= initialValue)
	}

	return (
		<div>
            <h2>Counter: {counter}</h2>
			<button onClick={eventIncrement}>Increment</button>
			<button onClick={eventDecrement}>Decrement</button>
			<button onClick={eventReset}>Reset</button>
		</div>
	)
}