import { CREATE_FORM_OBJECTS, UPDATE_FORM } from '../actions'

export default function formObjects(state = [{}], action){
	switch(action.type) {
		case CREATE_FORM_OBJECTS:
			return action.formObjects
			// // Trying to make it save anything that was previously entered, that way if they want 1 less element
			// // but later decide they want to add that one back in, it'll be saved. Not sure how to do that though..
			// return action.formObjects.map((object, i) => {
			// 	if (state[i] !== undefined){
			// 		return state[i]
			// 	}
			// 	return object
			// })
		case UPDATE_FORM:
			console.log(action.id, action.text)
			return [ ...state.slice(0, action.id),
					{id: action.id, text: action.text},
					...state.slice(action.id + 1)]
		default:
			return state
	}
}