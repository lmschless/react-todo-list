import React, { Component } from 'react';
import { v4 } from 'uuid';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		};
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		// create variable on submit to add a unique ID to every box.
		// ID will be used for selecting which object to remove from state/window.
		const newTodo = {
			...this.state,
			id: v4()
		};
		this.props.createTodo(newTodo);
		this.setState({ height: '', width: '', color: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Fill out Todo: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						id="name"
						onChange={this.handleChange}
					/>
				</div>
				<button>Add New Todo</button>
			</form>
		);
	}
}
