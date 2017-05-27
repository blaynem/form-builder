import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateForm } from '../actions';


class FormPickerGroup extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.saveFormElement = this.saveFormElement.bind(this)
		this.state = { formInputValue: "", formSelectType: "text" }
	}

	handleChange(e) {
		const target = e.target
		const name = target.name

		console.log("target", target)
		console.log("name", name)
		this.setState({ [name]: e.target.value })
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		this.props.updateForm(this.props.id, this.state.formInputValue)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	renderFormChoice(){
		if (this.state.formSelectType === "text") {
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
		}
	}

	render() {
		return (
			<div>
			<form>
				<FormGroup>
					<ControlLabel>Form {this.props.id + 1}</ControlLabel>
					<FormControl 
						componentClass="select"
						name="formSelectType"
						placeholder="select3"
						value={this.state.formSelectType}
						onChange={this.handleChange}
						>
						<option value="text">Text</option>
						<option value="select">Select</option>
						<option value="select3">farts</option>
					</FormControl>
					<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
				</FormGroup>
			</form>
			<form>
				<FormGroup>
					{this.renderFormChoice()}
				</FormGroup>
			</form>
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