import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
export default function TodoList(props) {
	if (
		props.todos.length // if there is anything in the todos state
	)
		return (
			<Paper>
				<List>
					{props.todos.map((todo, i) => (
						<React.Fragment key={todo.id}>
							<Todo
								// pass down the entire todo object using ...todo instead of typing each individual prop.
								{...todo}
								// task={todo.task}
								// id={todo.id}
								// completed={todo.completed}
								removeTodo={props.removeTodo}
								toggleTodo={props.toggleTodo}
								editTodo={props.editTodo}
								key={todo.id}
							/>
							{i < props.todos.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Paper>
		);
	return null; //if no todos in state, return null
}
