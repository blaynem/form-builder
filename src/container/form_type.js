import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormData } from '../actions';

import FormCheckbox from './form_checkbox';
import FormRadio from './form_radio';

class FormType extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.saveFormElement = this.saveFormElement.bind(this)
		this.state = { formInputValue: "",
			checkbox1: false,
			checkbox2: true,
			checkbox3: false,
			selectedRadio: "option3"
		}
	}

	// handles change
	handleChange(e) {
		const target = e.target
		const name = target.name
		// checks if the targets name is radioGroup, if it's sets the selectedRadio
		if (name === "radioGroup"){ this.setState({ selectedRadio: target.value })}
		const value = target.type === 'checkbox' ? target.checked : target.value
		this.setState({ [name]: value })
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		this.props.updateFormData(this.props.id, this.state.formInputValue)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	renderFormChoice(){
		const { formTypeChoice } = this.props;

		switch (formTypeChoice){
			case "text":
				return (
					<div>
						<FormControl 
								type="text"
								name="formInputValue"
								value={this.state.formInputValue}
								onChange={this.handleChange}
								placeholder="Enter Text"
								onBlur={this.saveFormElement}
							/>
							<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
					</div>
				)
			case "textarea":
				return (
					<div>
						<FormControl 
								type="text"
								name="formInputValue"
								componentClass="textarea"
								value={this.state.formInputValue}
								onChange={this.handleChange}
								placeholder="Enter Text"
								onBlur={this.saveFormElement}
							/>
						<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
					</div>
				)
			case "checkbox":
			 return (
					<FormCheckbox labels={this.props.labels}/>
				)
		 	case "radio":
			 	return (
			 		<FormRadio labels={this.props.labels}/>
				)
			default:
				return (
					<div>Choose</div>
				)
		}
	}

	render() {
		return (
			<form>
				<FormGroup style={{marginBottom:"10px"}}>
					{this.renderFormChoice()}
				</FormGroup>
			</form>
		)
	}
}

// function mapStateToProps(state){
// 	return { formObjects: state.formObjects }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFormData }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormType);