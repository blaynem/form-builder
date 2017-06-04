import React, { Component } from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import FormType from '../container/form_type';

class ComponentView extends Component {
	renderForms(){
		const { formObjects } = this.props
		if (this.props.formObjects.length === 0) return <div><h4>Create some elements!</h4></div>
		return formObjects.map((object, i) => {
			return (
				<FormGroup key={object + i}>
					<ControlLabel>
						<h4>{object.fieldName}</h4>
					</ControlLabel>
					<FormType formTypeChoice={object.fieldType} id={i} labels={object.fieldData}/>
				</FormGroup>
			)
		})
	}
	render() {
		// console.log(this.props.formObjects)
		return (
			<div>
				{this.renderForms()}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { formObjects: state.formObjects }
}

export default connect(mapStateToProps, {})(ComponentView);