import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';

import templateHandlers from '../templates/templates.js';

class WellCode extends Component {
	constructor(props){
		super(props)

		this.renderGroups = this.renderGroups.bind(this)
	}
	renderGroups(){
		let groups = '';
		this.props.formObjects.forEach((item, i) =>{
			if ( Object.keys(templateHandlers).includes(item.fieldType) ) {
				groups += templateHandlers[item.fieldType](item, i);
			} else {
				groups += templateHandlers['undefined'](item, i);
			}
		})
		return groups;
	}


	render() {
		let formItems = this.renderGroups()
		const baseConstructorAndHandleChange = `
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {}
	}
	// handles changes to the checkbox
	handleChange(e) {
		const target = e.target
		const name = target.name
		// if the type is radio, will set the state of selectedRadio
		if (target.type === "radio"){ return this.setState({ [name] : target.value }) }
		const value = target.type === "checkbox" ? target.checked : target.value
		// allows me to push new key/values depending on what the user has selected to input
		this.setState({ [name]: value })
	}`
		const baseCode = `
import React, { Component } from 'react';
import { Jumbotron, Radio, Checkbox, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class RenderedForm extends Component {
	${baseConstructorAndHandleChange}
	render() {
		console.log(this.state)
		return (
			<form>
			${formItems}
			</form>
		)
	}
}`
		return (
			<Well className="row">
				<pre>{baseCode}</pre>
			</Well>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}

export default connect(mapStateToProps, {})(WellCode);
