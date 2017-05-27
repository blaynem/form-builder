export const CREATE_FORM_OBJECTS = "CREATE_FORM_OBJECTS"

export const UPDATE_FORM = "UPDATE_FORM";

export function createFormObjects(formObjects){
	return {
		type: CREATE_FORM_OBJECTS,
		formObjects
	}
}

export function updateForm(id, text){
	return {
		type: UPDATE_FORM,
		id,
		text
	}
}