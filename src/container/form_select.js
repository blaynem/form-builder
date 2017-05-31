import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class FormSelect extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		// keep in mind, the state does literally nothing but show you what is selected
		// and to give a decent user experience. If this didn't allow something to be clicked,
		// the user would think something was wrong.
		this.state = { selectChoice: "select"}
	}

	// handles changes to the checkbox
	handleChange(e) {
		const target = e.target
		// sets state of selected radio to target.value
		this.setState({ selectChoice: target.value })
	}

	// renders all the checkboxes depending on how many items are in this.props.labels (props originate in form_picker_group)
	renderSelectOptions(){
		const labels = this.props.labels.split(";")
		return labels.map((label, index) => {
			if (label === "" || label === " "){
				label = "Empty"
			}
			return (
					<option key={label + index} value={label}>{label}</option>
			)
		})
	}

	render() {
		return (
			<div>
				<FormControl 
					componentClass="select"
					name="selectChoice"
					placeholder="select"
					value={this.state.selectChoice}
					onChange={this.handleChange}
					>
				{this.renderSelectOptions()}
				</FormControl>
			</div>
		)
	}
}

export default FormSelect;