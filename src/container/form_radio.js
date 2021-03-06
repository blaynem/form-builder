import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';

class FormRadio extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		// keep in mind, the state does literally nothing but show you what is selected
		// and to give a decent user experience. If this didn't allow something to be clicked,
		// the user would think something was wrong.
		this.state = { selectedRadio: null}
	}

	// handles changes to the checkbox
	handleChange(e) {
		const target = e.target
		// sets state of selected radio to target.value
		this.setState({ selectedRadio: target.value })
	}

	// renders all the checkboxes depending on how many items are in this.props.labels (props originate in form_picker_group)
	renderRadioButtons(){
		const labels = this.props.labels.split(";")
		return labels.map((label, index) => {
			let trimLabel = label.trim()
			if (trimLabel === ""){
				trimLabel = "Empty"
			}
			return (
				<Radio
					inline
					key={trimLabel + index}
					name={trimLabel}
					value={trimLabel}
					checked={this.state.selectedRadio === trimLabel}
					onChange={this.handleChange}>
				  {trimLabel}
				</Radio>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderRadioButtons()}
			</div>
		)
	}
}

export default FormRadio;