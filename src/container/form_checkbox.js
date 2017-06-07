import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class FormCheckbox extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		// keep in mind, the state does literally nothing but show you what is selected
		// and to give a decent user experience. If this didn't allow something to be clicked,
		// the user would think something was wrong.
		this.state = {}
	}

	// handles changes to the checkbox
	handleChange(e) {
		const target = e.target
		const name = target.name
		// allows me to push new key/values depending on what the user has selected to input
		this.setState({ [name]: target.checked })
	}

	// renders all the checkboxes depending on how many items are in this.props.labels (props originate in form_picker_group)
	renderCheckboxes(){
		const labels = this.props.labels.split(";")
		return labels.map((label, index) => {
			let trimLabel = label.trim()
			if (trimLabel === ""){
				trimLabel = "Empty"
			}
			return (
				<Checkbox
					key={trimLabel + index}
					inline
					name={trimLabel}
					onChange={this.handleChange}>
					{trimLabel}
				</Checkbox>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderCheckboxes()}
			</div>
		)
	}
}

export default FormCheckbox;