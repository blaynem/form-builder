// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
const createSelect = (item, i) => `
        <formGroup>
          <h4>${item.fieldName}</h4>
          <FormControl
            // lets bootstrap know this is a select component
            componentClass="select"
            // name is used to determine what select state should be chosen.
            name="selectChoice${i}"
            // placeholder value should be whatever options value you'd like to be chosen initially
            placeholder="select"
            // value prop should always be the state of the name prop
            value={this.state.selectChoice${i}}
            onChange={this.handleChange}>\
            ${item.fieldData.split(";").map(data => `
            // value prop should always be similar or equal to the labels text value
            <option value="${data}">${data}</option>`)}
          </FormControl>
        </formGroup>`;

export default createSelect;
