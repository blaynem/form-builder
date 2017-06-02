// make sure to use spaces instead of tabs if editing this, otherwise the printed
// text to the "well" will be formatted really strangely.
const createRadio = (item, i) => `
        <formGroup className="row">
          <h4>${item.fieldName}</h4>\
        ${item.fieldData.split(";").map(data => `
          <Radio
            inline
            name="selectedRadio${i}"
            value="${data}"
            checked={this.state.selectedRadio${i} === "${data}"}
            onChange={this.handleChange}>
            <p>${data}</p>
          </Radio>`)}
        </formGroup>`;

export default createRadio;
