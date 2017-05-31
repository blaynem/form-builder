import React, { Component } from 'react';
import { Well, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
class WellCode extends Component {
	renderGroups(){
		return this.props.formObjects.map((item, i) =>{
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
				// <pre><code>
				// </code></pre>
	render() {
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
				{this.renderGroups()}
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