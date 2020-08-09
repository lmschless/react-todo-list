import React, { useEffect } from 'react';
import useTodoState from './Hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styled from 'styled-components';

// app component layout
// -TodoApp
//   -TodoForm
//   -TodoList
//     -TodoItem
// each todo will have an id, task, completed(t/f)
const StyledPaper = styled(Paper)`
					padding: 0;
					margin: 0;
					height: 100vh;
					background-color: '#fafafa';
	
	`;

export default function TodoApp() {
	const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

	// initialize every function from useTodoState.js so they can be used in this file
	const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
		initialTodos
	);

	// const initialTodos = [
	// 	{ id: v4(), task: 'Clean Fishtank', completed: false },
	// 	{ id: v4(), task: 'Wash Car', completed: true },
	// 	{ id: v4(), task: 'Grow Beard', completed: false }
	// ];

	useEffect(
		() => {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ] // tell useEffect to run every time todos is updated
	);

	return (
		<StyledPaper elevation={0}>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						completed={todos.completed}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</StyledPaper>
	);
}
