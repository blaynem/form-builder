// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
const createTextInput = item => `
        <formGroup className="row">
          <ControlLabel>
            <h4>${item.fieldName}</h4>
          </ControlLabel>
          <FormControl
            type="${item.fieldType}"
            name="formInputValue${item.fieldType}"
            ${item.fieldType === "textarea" ? "componentClass='textarea'" : ""}
            value={this.state.formInputValue}
            onChange={this.handleChange}
            placeholder="This text will not be saved"
          />
        </formGroup>`;

export default createTextInput;
