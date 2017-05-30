import React, { Component } from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormData } from '../actions';


class FormCheckbox extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.state = {
		}
	}

	// handles change
	handleChange(e) {
		const target = e.target
		const name = target.name
		// checks if the targets name is radioGroup, if it's sets the selectedRadio
		this.setState({ [name]: target.checked })
	}

	componentWillReceiveProps(){

	}

	renderCheckboxes(){
		const labels = this.props.labels.split(";")
		return labels.map((label, index) => {
			if (label === "" || label === " "){
				label = "Empty"
			}
			return (
				<Checkbox
					key={label + index}
					inline
					name={label}
					checked={this.state.checkbox}
					onChange={this.handleChange}>
					{label}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFormData }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormCheckbox);