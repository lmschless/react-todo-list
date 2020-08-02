import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 } from 'uuid';
import './TodoList.css';
export default class TodosList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{ name: 'Take out the trash', id: v4(), completed: false },
				{ name: 'Walk the dog', id: v4(), completed: false },
				{ name: 'Go to the gym', id: v4(), completed: false },
				{ name: 'Wash the Car', id: v4(), completed: false }
			]
		};
	}

	remove = (id) => {
		// create a new array that does NOT contain the todo object with an id
		// that matches the id passed in (corresponds to the specific X button clicked)
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	};

	toggleCompletion = (id) => {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	update = (id, updatedName) => {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, name: updatedName };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	create = (newTodo) => {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
			<div className="TodoList">
				<h1>
					Todo List!<span>A Simple React Todo List App</span>
				</h1>
				<ul>
					{this.state.todos.map((todo) => (
						<Todo
							name={todo.name}
							key={todo.id}
							id={todo.id}
							remove={() => this.remove(todo.id)}
							edit={() => this.edit(todo.id)}
							update={this.update}
							completed={todo.completed}
							toggleTodo={this.toggleCompletion}
						/>
					))}
				</ul>
				<br />
				<NewTodoForm createTodo={this.create} />
			</div>
		);
	}
}
