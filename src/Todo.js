import React, { Component } from 'react';
import './Todo.css';
export default class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			task: this.props.name
		};
	}

	toggleForm = () => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	handleUpdate = (evt) => {
		evt.preventDefault();
		// take a new todo and pass up to parent
		this.props.update(this.props.id, this.state.task);
		this.setState({
			isEditing: false
		});
	};

	handleChange = (evt) => {
		this.setState({
			task: evt.target.value
		});
	};

	render() {
		let result;

		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input
							type="text"
							value={this.state.task}
							name="task"
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div>
					<li
						className={this.props.completed ? 'completed' : ''}
						onClick={() => {
							this.props.toggleTodo(this.props.id);
						}}
					>
						{this.props.name} <button onClick={this.toggleForm}>
							Edit
						</button>{' '}
						<button onClick={this.props.remove}>X</button>
					</li>{' '}
				</div>
			);
		}
		return result;
		// <div>
		// 	<li>
		// 		{this.props.name} <button onClick={this.props.edit}>Edit</button>{' '}
		// 		<button onClick={this.props.remove}>X</button>
		// 	</li>{' '}
		// </div>
	}
}
