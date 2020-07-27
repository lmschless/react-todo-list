import React, { Component } from 'react';
import Todo from './Todo';
import NewBoxForm from './NewTodoForm';
import { v4 } from 'uuid';

export default class TodosList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{ name: 'Take out the trash', id: v4() },
				{ name: 'Walk Gizmo', id: v4() }
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

	edit = (evt) => {};

	create = (newTodo) => {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
			<div>
				<h1>React Todos List</h1>
				<br />
				<NewBoxForm createTodo={this.create} />
				<ul>
					{this.state.todos.map((todo) => (
						<Todo
							name={todo.name}
							key={todo.id}
							id={todo.id}
							remove={() => this.remove(todo.id)}
							edit={() => this.edit(todo.id)}
						/>
					))}
				</ul>
			</div>
		);
	}
}
