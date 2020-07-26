import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>{' '}
				<button onClick={this.props.remove}>X</button>
			</div>
		);
	}
}
