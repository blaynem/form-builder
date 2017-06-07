// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
import formGroup from "./formGroup";

// item.fieldType needs to include the value prop in it's ternary,
// otherwise it leads to a funky space.
const createTextInput = item => formGroup(item.fieldName, `
          <FormControl
            type="${item.fieldType}"
            // name is used to determine what text form is being edited
            name="formInputValue${item.fieldType}"
            ${item.fieldType === "textarea" ?
            `// tells bootstrap that this is a textarea component
            componentClass='textarea'
            value={this.state.formInputValue}` : "value={this.state.formInputValue}"}
            onChange={this.handleChange}
            placeholder="This text will not be saved"
          />`);

export default createTextInput;
