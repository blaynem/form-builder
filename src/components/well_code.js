import React, { Component } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Well, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
let mhm
class WellCode extends Component {
	constructor(props){
		super(props)

		this.renderGroups = this.renderGroups.bind(this)
		this.createMarkup = this.createMarkup.bind(this)
	}
	renderGroups(){
		return mhm = this.props.formObjects.map((item, i) =>{
			return (
				<Col key={item + i} xs={6}>
					<h4>Id:{i}</h4>
					<p>fieldType: {item.fieldType}</p>
					<p>fieldName: {item.fieldName}</p>
					<p>fieldData: {item.fieldData}</p>
				</Col>
			)
		})
	}

	createMarkup() {
	  return { __html: this.renderGroups()};
	}
	render() {
		console.log(this.props)
		const h4="<h4>", h4c="</h4>", p="<p>", pc="</p>"
		const uh = `
class WellCode extends Component {
  render() {
    return (
      <Well className="row">
        ${this.renderGroups()}
      </Well>
    )
  }
}`
		return (
			<Well className="row">
				<pre>{uh}</pre>
				<div dangerouslySetInnerHTML={this.createMarkup()} />
			</Well>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateFormName, updateFormType, updateFormData }, dispatch)
// }
export default connect(mapStateToProps, {})(WellCode);