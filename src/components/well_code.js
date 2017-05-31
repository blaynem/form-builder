import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class WellCode extends Component {
	renderGroups(){
		return this.props.formObjects.map((item, i) =>{
			return <div key={item + i}>{JSON.stringify(item)}</div>
		})
	}

	render() {
		return (
			<Well>
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