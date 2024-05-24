import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterDisplay } from './CounterDisplay'
import { Clock } from './Clock'

function CounterLogic({ initialValue= 0, incrementBy= 1, decrementBy= 1 }) {
	const [counter, setCounter] = useState(initialValue)

	function eventIncrement() {
		setCounter((c) => c + incrementBy)
	}

	function eventDecrement() {
		setCounter((c) => c - decrementBy)
	}

	function eventReset() {
		setCounter((c)=> c= initialValue)
	}

	useEffect(() => {
		console.log(counter);
	}, [counter]);


	return (
		<div>
			<CounterDisplay counter={counter} />
			<button onClick={eventIncrement}>Increment</button>
			<button onClick={eventDecrement}>Decrement</button>
			<button onClick={eventReset}>Reset</button>
			<br/><br/>
			<Clock />
		</div>
	)
}

createRoot(document.getElementById("root")).render(<CounterLogic />)


/* è consigliabile scrivere una callback function in setCounter, per una serie di motivi:
 lo hook è assegnato ad una costante, il cui valore 
 quindi non può essere modificato direttamente ma attraverso una funzione raccolta nella costante stessa.
 Inoltre usando delle callback possiamo effettuare anche più operazioni che nel momento del rendering, perché queste
 verranno aggiunte allo stack delle operazioni: quindi saranno esegiute una dopo l'atra rendendo alla successiva un valore aggiornato*/