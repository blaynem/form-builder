import React, { Component } from 'react';
import { Well, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import ClipboardButton from 'react-clipboard.js';

import ComponentView from './component_view';
import templateHandlers from '../templates';

class WellCode extends Component {
	constructor(props){
		super(props)

		this.renderGroups = this.renderGroups.bind(this)
		this.state = { showCode: false }
	}
	displayCode(){
		this.setState({ showCode: !this.state.showCode })
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
		// replaces any of the returned commas
		return groups.replace(/>,/g, '>');
	}

	render() {
		let formItems = this.renderGroups()
// make sure to use spaces instead of tabs if editing any of the strings, otherwise the printed
// text to the "well" will be formatted really strangely.
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
    // allows you to push new key/values depending on what was selected
    this.setState({ [name]: value })
  }`
		const baseCode = `
// Comments are here to help determine what is going on, feel free to remove them
import React, { Component } from 'react';
// imports all of the potential bootstrap components you might need.
// Feel free to ones that aren't needed.
import { Well, Jumbotron, Radio, Checkbox, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class RenderedForm extends Component {
  ${baseConstructorAndHandleChange}
  render() {
  	// logs the state so you can test that the imported code is working correctly.
    console.log(this.state)
    const formStyle = {background: "#f5f5f5", border: "1px solid #e3e3e3", borderRadius:"4px"}
    return (
      <Well className="container" style={formStyle}>\
      ${formItems}
      </Well>
    )
  }
}`
		return (
			<div>
				<div style={{textAlign:"center"}}>
					<h3 style={{textAlign:"center", margin:0}}>Form Demo</h3>
					<button onClick={() => this.displayCode()} style={{marginBottom:"5px"}}>Show {this.state.showCode ? "Layout" : "Code"}</button>
					<ClipboardButton data-clipboard-text={baseCode}>Copy Code</ClipboardButton>
				</div>
				<Well className="row">
					<div style={{display:(this.state.showCode ? "none" : "")}}>
						<ComponentView thing={formItems}/>
					</div>
					<pre id="code-block" style={{display:(this.state.showCode ? "" : "none")}}>{baseCode}</pre>
				</Well>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}

export default connect(mapStateToProps, {})(WellCode);
