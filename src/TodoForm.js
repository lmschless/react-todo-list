import React from 'react';
import useInputState from './Hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function TodoForm({ addTodo }) {
	// only import addTodo instead of all props

	// initialize custom hook here
	const [ value, handleChange, reset ] = useInputState('');
	return (
		<div>
			<Paper>
				<form
					onSubmit={(e) => {
						e.preventDefault(); // prevents a refresh
						addTodo(value); // takes value of input and passes it up to addTodo
						reset(); // call useInputState reset function to clear input
					}}
				>
					<TextField value={value} type="text" onChange={handleChange} />
				</form>
				<button onClick={reset}>Submit</button>
			</Paper>
		</div>
	);
}
