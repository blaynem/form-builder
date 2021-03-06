import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createFormObjects } from '../actions';
import { FormControl, Form, ControlLabel, FormGroup, Button } from 'react-bootstrap';

import FormPickerGroup from './form_picker_group';

class FormPicker extends Component {
	constructor(props){
		super(props)

		this.onElementTotalChange = this.onElementTotalChange.bind(this)
		this.onRenderButtonClick = this.onRenderButtonClick.bind(this)
		this.state = { elements: 0 }
	}

	// determines how many forms elements there should be
	onElementTotalChange(e){
		e.preventDefault()
		const target = e.target
		const value = target.value

		this.setState({ elements: value })
	}

	// when you press the 'create' button it'll render all the form elements
	onRenderButtonClick(e){
		e.preventDefault()

		let amount = this.state.elements
		let i = 0
		let formsArray = []

		// theres probably a better way to do this, but for now.. this is it.
		// fieldData should be the same thing as this.state.labels inside the form_picker_group.js file
		while (i < amount){
			formsArray.push({fieldName: `Form ${i + 1}`, fieldType:"text", fieldData:"yes; no; maybe"})
			i++
		}

		// runs the action createFormObjects
		this.props.createFormObjects(formsArray)
	}

	renderForms(){
		return this.props.formObjects.map((forms, i) => {
			return <FormPickerGroup key={i} id={i}/>
		})
	}

	render() {
		return (
			<div>
				<Form inline style={{textAlign: "center", marginBottom:"30px"}}>
					<FormGroup >
						<ControlLabel style={{marginRight:"40px"}}>How many form elements should your form have?</ControlLabel>
							<FormControl 
								type="number" 
								name="numberOfElements"
								value={this.state.elements} 
								onChange={this.onElementTotalChange} 
								placeholder="Enter Number" />
						<Button type="submit" onClick={this.onRenderButtonClick}>Create</Button>
					</FormGroup>
				</Form>
				{this.renderForms()}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createFormObjects }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPicker);