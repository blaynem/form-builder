import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
class WellCode extends Component {
	constructor(props){
		super(props)

		this.renderGroups = this.renderGroups.bind(this)
	}
	renderGroups(){
		return this.props.formObjects.map((item, i) =>{
			// text and textarea layout for form
			const textForm =`
				<formGroup className="row">
					<ControlLabel>
						<h4>${item.fieldName}</h4>
					</ControlLabel>
					<FormControl 
						type="${item.fieldType}"
						name="formInputValue${item.fieldType}"
						${item.fieldType === "textarea" ? "componentClass='textarea'" : ""}
						value={this.state.formInputValue}
						onChange={this.handleChange}
						placeholder="This text will not be saved"
						onBlur={this.saveFormElement}
					/>
				</formGroup>
			`
			// checkbox layout for form
			const checkboxForm = item.fieldData.split(";").map((data) => {
				return `<Checkbox
					// inline allows you to render the checkbox inline with other checkboxes
					inline
					name="${data}"
					onChange={this.handleChange}>
					${data}
				</Checkbox>
				`
			})
			// select layout for form
			const selectForm = (
				`<FormControl 
					componentClass="select"
					name="selectChoice"
					placeholder="select"
					value={this.state.selectChoice}
					onChange={this.handleChange}
					>
				${item.fieldData.split(";").map((data) => {
					return `
					<option value="${data}">${data}</option>`})}
					</FormControl>`
			)

			// select layout for form
			const radioForm = item.fieldData.split(";").map((data) => {
					return `<Radio
						inline
						name="selectedRadio"
						value="${data}"
						checked={this.state.selectedRadio === "${data}"}
						onChange={this.handleChange}>
					  ${data}
					</Radio>
					`
				})




			if (item.fieldType === "text" || item.fieldType === "textarea"){
				return textForm
			}
			if (item.fieldType ==="checkbox"){
				return `
				<formGroup>
					<h4>${item.fieldName}</h4>
					${checkboxForm}
				</formGroup>
				`
			}
			if (item.fieldType ==="select"){
				return `
				<formGroup>
					<h4>${item.fieldName}</h4>
					${selectForm}
				</formGroup>
				`
			}
			if (item.fieldType ==="radio"){
				return `
				<formGroup>
					<h4>${item.fieldName}</h4>
					${radioForm}
				</formGroup>
				`
			}
			return `(
				<Col xs={6}>
					<h4>Id:${i}</h4>
					<p>fieldType: ${item.fieldType}</p>
					<p>fieldName: ${item.fieldName}</p>
					<p>fieldData: ${item.fieldData}</p>
				</Col>
			)`
		})
	}


	render() {
		let ok = this.renderGroups()
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
    if (target.type === "radio"){ return this.setState({ selectedRadio: target.value }) }
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
      ${ok}
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