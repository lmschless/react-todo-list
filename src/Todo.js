import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styled from 'styled-components';

const StyledListItemText = styled(ListItemText)`
		text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
		`;

export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
	return (
		<ListItem>
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
				<IconButton aria-label="Edit">
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
		</ListItem>
	);
}
