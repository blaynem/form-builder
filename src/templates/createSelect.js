const createSelect = (item, i) => `
				<formGroup>
					<h4>
					<FormControl
						componentClass="select"
						name="selectChoice${i}"
						placeholder="select"
						value={this.state.selectChoice${i}}
						onChange={this.handleChange}
						>
						${item.fieldData.split(";").map(data => `
						<option value="${data}">${data}</option>`)}
					</FormControl>
				</formGroup>`;

export default createSelect;
