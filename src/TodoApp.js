import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 } from 'uuid';
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
	const initialTodos = [
		{ id: v4(), task: 'Clean Fishtank', completed: false },
		{ id: v4(), task: 'Wash Car', completed: true },
		{ id: v4(), task: 'Grow Beard', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);

	const addTodo = (newTodoText) => {
		// copies the original todos state and concatenates a new todo object to it
		setTodos([ ...todos, { id: v4(), task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoid) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoid);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoid) => {
		const updatedTodos = todos.map(
			(todo) =>
				todo.id === todoid ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const editTodo = (todoid, newTask) => {
		const updatedTodos = todos.map(
			(todo) => (todo.id === todoid ? { ...todo, task: newTask } : todo)
		);
		setTodos(updatedTodos);
	};

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
