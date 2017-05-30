import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormName, updateFormType } from '../actions';

import FormType from './form_type';

class FormPickerGroup extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.saveFormElement = this.saveFormElement.bind(this)
		this.state = { formSelectType: "text", formName: `Form ${this.props.id + 1}`, labels: "barbie; steve" }
	}

	handleChange(e) {
		const { id } = this.props
		const target = e.target
		const name = target.name

		// changes state of input 
		this.setState({ [name]: target.value })
		// returns if its the formName element, so it won't send action to store
		// every click of the key.
		if (name === "formName" || name === "labels") return
		this.props.updateFormType(id, target.value)
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		this.props.updateFormName(this.props.id, e.target.value)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	// if the it's a checkbox or radio tye, will return the box asking how many of checkbox/radio buttons should be rendered
	renderHowManyRow(){
		if (this.state.formSelectType === "checkbox" || this.state.formSelectType === "radio"){
			return (
				<div>
					<FormGroup>
						<ControlLabel style={{marginRight:"20px"}}>
							<h4>Labels (separate lables by a semi-colon)</h4>
						</ControlLabel>
						<FormControl
								name="labels"
								type="text" 
								value={this.state.labels}
								onChange={this.handleChange}
								onBlur={this.saveFormElement} />
						<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
					</FormGroup>
				</div>
			)
		}
		return
	}

	render() {
		const { formSelectType } = this.state;

		return (
			<div>
				<Form inline style={{marginBottom:"10px"}}>
					<FormGroup>
						<ControlLabel style={{marginRight:"30px"}}>
							<FormControl
								className="formNamePlaceholder"
								style={{border:"none", color:"black"}}
								name="formName"
								type="text" 
								value={this.state.formName}
								onChange={this.handleChange}
								onBlur={this.saveFormElement} />
						</ControlLabel>
						<FormControl 
							componentClass="select"
							name="formSelectType"
							placeholder="select3"
							value={formSelectType}
							onChange={this.handleChange}
							>
							<option value="text">Text</option>
							<option value="textarea">Text Area</option>
							<option value="checkbox">Checkbox</option>
							<option value="radio">Radio Buttons</option>
						</FormControl>
					</FormGroup>
						{this.renderHowManyRow()}
				</Form>
				<FormType formTypeChoice={formSelectType} id={this.props.id} labels={this.state.labels}/>
				<div style={{borderBottom:"1px solid #919191", width:"100%", margin:"auto", marginBottom:"10px"}}></div>
			</div>
		)
	}
}

// function mapStateToProps(state){
// 	return { formObjects: state.formObjects }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFormName, updateFormType }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormPickerGroup);