const createRadio = (item, i) => item.fieldData.split(";").map(data => `
				<formGroup>
					<h4>${item.fieldName}</h4>
					<Radio
						inline
						name="selectedRadio${i}"
						value="${data}"
						checked={this.state.selectedRadio${i} === "${data}"}
						onChange={this.handleChange}>
						${data}
					</Radio>
				</formGroup>`);

export default createRadio;
