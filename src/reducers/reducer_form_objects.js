import { CREATE_FORM_OBJECTS } from '../actions'

export default function formObjects(state = [], action){
	switch(action.type) {
		case CREATE_FORM_OBJECTS:
			console.log("test passed", action.formObjects)
			return action.formObjects
		default:
			return state
	}
}