import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import FormType from '../container/form_type';
import FormCheckbox from '../container/form_checkbox';
import FormRadio from '../container/form_radio';
import FormSelect from '../container/form_select';

class ComponentView extends Component {
	renderForms(){
		const { formObjects } = this.props
		return formObjects.map((object, i) => {
			console.log(object)
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
		console.log(this.props.formObjects)
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