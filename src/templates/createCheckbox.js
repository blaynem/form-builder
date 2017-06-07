// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
import formGroup from "./formGroup";

const createCheckbox = item => formGroup(item.fieldName, item.fieldData.split(";").map(data => `
          <Checkbox
            // inline allows you to render the checkbox inline with other checkboxes
            inline
            // name is used to determine what element should be checked in state.
            // the name prop should be similar or the same as the labels text value
            name="${data.trim()}"
            onChange={this.handleChange}>
            <p>${data.trim()}</p>
          </Checkbox>`).join(""));

export default createCheckbox;
