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
						onBlur={this.saveFormElement}
					/>
				</formGroup>`;

export default createTextInput;
