import createTextInput from './createTextInput.js';
import createCheckbox from './createCheckbox.js';
import createSelect from './createSelect.js';
import createRadio from './createRadio.js';
import createUndefined from './createUndefined.js';

const templateHandlers = {
	'text': createTextInput,
	'textarea': createTextInput,
	'checkbox': createCheckbox,
	'select': createSelect,
	'radio': createRadio,
	'undefined': createUndefined
};

export default templateHandlers;
