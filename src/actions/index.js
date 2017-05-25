export const CREATE_FORM_OBJECTS = "CREATE_FORM_OBJECTS"

export function createFormObjects(formObjects){
	return {
		type: CREATE_FORM_OBJECTS,
		formObjects
	}
}