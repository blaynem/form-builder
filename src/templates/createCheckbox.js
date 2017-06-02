const createCheckbox = item => item.fieldData.split(";").map(data => `
				<formGroup>
					<h4>${item.fieldName}</h4>
					<Checkbox
						// inline allows you to render the checkbox inline with other checkboxes
						inline
						name="${data}"
						onChange={this.handleChange}>
						${data}
					</Checkbox>
				</formGroup>`);

export default createCheckbox;
