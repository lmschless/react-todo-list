import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>{' '}
				<button onClick={this.props.remove}>X</button>
			</div>
		);
	}
}
