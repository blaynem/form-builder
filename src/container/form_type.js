import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateForm } from '../actions';


class FormPickerGroup extends Component {
	constructor(props){
		super(props)

		// this.handleChange = this.handleChange.bind(this)
		// this.saveFormElement = this.saveFormElement.bind(this)
		// this.state = { formInputValue: "", formSelectType: "select3" }
	}

	handleChange(e) {
		// const target = e.target
		// const name = target.name

		// console.log("target", target)
		// console.log("name", name)
		// this.setState({ [name]: e.target.value })
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		// this.props.updateForm(this.props.id, this.state.formInputValue)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	render() {
		return (
			<div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPickerGroup);