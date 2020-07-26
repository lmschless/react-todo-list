import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default class TodosList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [ 'Take out the trash' ]
		};
	}

	remove = (id) => {
		// create a new array that does NOT contain the box object with an id
		// that matches the id passed in (corresponds to the specific X button clicked)
		this.setState({
			boxes: this.state.boxes.filter((box) => box.id !== id)
		});
	};

	create = (newBox) => {
		this.setState({
			boxes: [ ...this.state.boxes, newBox ]
		});
	};

	render() {
		return (
			<div>
				<h1>Color Box Maker</h1>
				<NewBoxForm createBox={this.create} />
				{this.state.boxes.map((box) => (
					<Box
						key={box.id}
						id={box.id}
						width={box.width}
						height={box.height}
						color={box.color}
						remove={() => this.remove(box.id)}
					/>
				))}
			</div>
		);
	}
}
