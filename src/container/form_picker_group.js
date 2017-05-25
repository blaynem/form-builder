import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';

class FormPickerGroup extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.state = { stuff: 0 }
	}

	handleChange(e) {
		this.setState({ stuff: e.target.value })
	}

	render() {
		return (
			<form>
				<FormGroup>
					<ControlLabel>Yep, uh hu.</ControlLabel>
					<FormControl 
						type="text"
						name=""
						value={this.state.stuff}
						onChange={this.handleChange}
						placeholder="Enter Text"
					/>							
				</FormGroup>
			</form>
		)
	}
}

export default FormPickerGroup;