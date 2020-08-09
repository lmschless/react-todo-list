import { useState } from 'react';
import { v4 } from 'uuid';

// package up state and all functions that manipulate that state so that they can be reused in any component without passing down props.

export default (initialTodos) => {
	const [ todos, setTodos ] = useState(initialTodos);

	return {
		todos,
		addTodo: (newTodoText) => {
			// copies the original todos state and concatenates a new todo object to it
			setTodos([ ...todos, { id: v4(), task: newTodoText, completed: false } ]);
		},
		removeTodo: (todoid) => {
			const updatedTodos = todos.filter((todo) => todo.id !== todoid);
			setTodos(updatedTodos);
		},
		toggleTodo: (todoid) => {
			const updatedTodos = todos.map(
				(todo) =>
					todo.id === todoid ? { ...todo, completed: !todo.completed } : todo
			);
			setTodos(updatedTodos);
		},
		editTodo: (todoid, newTask) => {
			const updatedTodos = todos.map(
				(todo) => (todo.id === todoid ? { ...todo, task: newTask } : todo)
			);
			setTodos(updatedTodos);
		}
	};
};
