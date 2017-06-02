const createUndefined = (item, i) => `
				(
					<Col xs={6}>
						<h4>Id:${i}</h4>
						<p>fieldType: ${item.fieldType}</p>
						<p>fieldName: ${item.fieldName}</p>
						<p>fieldData: ${item.fieldData}</p>
					</Col>
				)`;

export default createUndefined;
