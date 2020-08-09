import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './Hooks/useInputState';
import styled from 'styled-components';

const StyledForm = styled.form`
	margin-left: 1rem;
	width: 50%;
`;

export default function EditTodoForm({ editTodo, id, toggleEditForm }) {
	const [ value, handleChange, reset ] = useInputState('');

	return (
		<StyledForm
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEditForm();
			}}
		>
			<TextField
				margin="normal"
				value={value}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
		</StyledForm>
	);
}
