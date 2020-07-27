import React, { Component } from 'react';

export default class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			task: ''
		};
	}

	toggleForm = () => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	handleUpdate = (evt) => {
		evt.preventDefault();
		// take a new todo and pass up to parent
	};

	render() {
		let result;
		{
			if (this.state.isEditing) {
				result = (
					<div>
						<form onSubmit={this.handleUpdate}>
							<input type="text" value={this.state.task} />
							<button>Save</button>
						</form>
					</div>
				);
			} else {
				result = (
					<div>
						<li>
							{this.props.name} <button onClick={this.toggleForm}>
								Edit
							</button>{' '}
							<button onClick={this.props.remove}>X</button>
						</li>{' '}
					</div>
				);
			}
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
