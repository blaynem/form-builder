// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
const createSelect = (item, i) => `
        <formGroup>
          <h4>${item.fieldName}</h4>
          <FormControl
            componentClass="select"
            name="selectChoice${i}"
            placeholder="select"
            value={this.state.selectChoice${i}}
            onChange={this.handleChange}>\
            ${item.fieldData.split(";").map(data => `
            <option value="${data}">${data}</option>`)}
          </FormControl>
        </formGroup>`;

export default createSelect;
