export const CREATE_FORM_OBJECTS = "CREATE_FORM_OBJECTS"
export const UPDATE_FORM_NAME = "UPDATE_FORM_NAME"
export const UPDATE_FORM_TYPE = "UPDATE_FORM_TYPE"
export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA"

// the form objects are just a bunch of empty objects.. really need to figure out
// a better way to create these.
export function createFormObjects(formObjects){
	return {
		type: CREATE_FORM_OBJECTS,
		formObjects
	}
}

export function updateFormName(id, fieldName) {
	console.log("uh", id, fieldName)
	return {
		type: UPDATE_FORM_NAME,
		id,
		fieldName
	}
}

export function updateFormType(id, fieldType){
	return {
		type: UPDATE_FORM_TYPE,
		id,
		fieldType
	}
}

export function updateFormData(id, fieldData){
	return {
		type: UPDATE_FORM_DATA,
		id,
		fieldData
	}
}
