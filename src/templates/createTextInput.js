// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
import formGroup from "./formGroup";

const createTextInput = item => formGroup(item.fieldName, `
          <FormControl
            type="${item.fieldType}"
            // name is used to determine what text form is being edited
            name="formInputValue${item.fieldType}"
            // depending on if this is a regular text form or text area form, below may be a blank space.
            ${item.fieldType === "textarea" ?
            `// tells bootstrap that this is a textarea component
            componentClass='textarea'` : ""}
            value={this.state.formInputValue}
            onChange={this.handleChange}
            placeholder="This text will not be saved"
          />`);

export default createTextInput;
