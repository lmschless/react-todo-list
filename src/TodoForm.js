import React from 'react';
import useInputState from './Hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
				margin: 1rem 0;
				padding: 0 1 rem;
	`;
export default function TodoForm({ addTodo }) {
	// only import addTodo instead of all props

	// initialize custom hook here
	const [ value, handleChange, reset ] = useInputState('');

	return (
		<StyledPaper>
			<form
				onSubmit={(e) => {
					e.preventDefault(); // prevents a refresh
					addTodo(value); // takes value of input and passes it up to addTodo
					reset(); // call useInputState reset function to clear input
				}}
			>
				<TextField
					value={value}
					type="text"
					onChange={handleChange}
					margin="normal"
					label="Add New Todo"
					fullWidth
				/>
			</form>
		</StyledPaper>
	);
}
