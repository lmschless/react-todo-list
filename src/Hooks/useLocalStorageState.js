import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultVal) {
	// make piece of state based off value in localstorage
	// pass function into useState to check localStorage and set state to that
	const [ state, setState ] = useState(() => {
		let val;
		try {
			// gets item from localstorage and sets it = to val
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});

	// have useEffect update localstorage when state changes
	useEffect(
		() => {
			// sets item in local storage when component loads
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state ] // only run when state updates
	);
	return [ state, setState ];
}

// example use case for this hook when used in another component
// const [ todos, setTodos ] = useLocalStorageState('todos', []);
