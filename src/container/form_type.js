import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormData } from '../actions';


class FormType extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.saveFormElement = this.saveFormElement.bind(this)
		this.state = { formInputValue: "" }
	}

	handleChange(e) {
		const target = e.target
		const name = target.name

		this.setState({ [name]: e.target.value })
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		console.log("prop id", this.props)
		console.log("form input", this.state.formInputValue)
		this.props.updateFormData(this.props.id, this.state.formInputValue)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	renderFormChoice(){
		const { formTypeChoice } = this.props;

		if (formTypeChoice === "text") {
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
		} else if (formTypeChoice === "textarea") {
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
		}
	}

	render() {
		// console.log(this.props)
		return (
			<form>
				<FormGroup>
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