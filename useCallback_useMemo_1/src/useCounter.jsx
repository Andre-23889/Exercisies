import { useCallback, useState } from 'react'

export function useCounter(initialValue, incrementBy, decrementBy) {
	const [counter, setCounter] = useState(initialValue)

	const Increase= useCallback (function increase() {
		setCounter((c) => c + incrementBy); console.log("increasing");
	})

	const Decrease= useCallback(function decrease() {
		setCounter((c) => c - decrementBy)
	})

	const Reset= useCallback (function reset() {
		setCounter((c)=> c= initialValue)
	},[initialValue])

	return {
		value:counter,
		useIncrease: Increase,
		useDecrease: Decrease,
		useReset: Reset

	}
}
