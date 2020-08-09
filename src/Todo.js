import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styled from 'styled-components';
import useToggleState from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const StyledListItemText = styled(ListItemText)`
		text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
		`;

// prevents todos from changing size and shifting when edit is clicked.
const StyledListItem = styled(ListItem)`
	height:64px;
	`

export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
	const [ isEditing, toggle ] = useToggleState(); // defaults to false

	return (
		<StyledListItem>
			{isEditing ?
			<EditTodoForm editTodo={editTodo} id={id} toggleEditForm={toggle}/>: 
			<>
			<Checkbox
				tabIndex={-1}
				checked={completed}
				onClick={() => {
					toggleTodo(id);
				}}
			/>
			 {/* have to add {completed ? 1 : 0} to convert bool into number for styled component logic above. */}
			<StyledListItemText completed={completed ? 1 : 0}>
				{task}
			</StyledListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="Edit" onClick={toggle}>
					<EditIcon />
				</IconButton>
				<IconButton
					aria-label="Delete"
					onClick={() => {
						removeTodo(id);
					}}
				>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
			</>
}
		</StyledListItem>
	);
}
