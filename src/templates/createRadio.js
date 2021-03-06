// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
import formGroup from "./formGroup";

const createRadio = (item, i) => formGroup(item.fieldName, item.fieldData.split(";").map(data => `
          <Radio
            inline
            // name is used to determine what radio state should be chosen.
            // the name prop should be the same for all radio buttons in the group
            name="selectedRadio${i}"
            // value is used to determine what radio element should be chosen in state.
            // the value prop should be similar or the same as the labels text value
            value="${data.trim()}"
            // returns true or false, changes depending on what radio button is clicked.
            // element in quotes should always be the same as the radio buttons value prop
            checked={this.state.selectedRadio${i} === "${data.trim()}"}
            onChange={this.handleChange}>
            <p>${data.trim()}</p>
          </Radio>`).join(""));

export default createRadio;
