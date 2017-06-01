import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import FormPicker from './form_picker';
import WellCode from '../components/well_code';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h2>Form Picker Thing</h2>
          </Jumbotron>
          <div className="col-xs-12">
            <FormPicker />
          </div>
        </div>
        <div className="row">
          <WellCode />
        </div>
      </div>
    );
  }
}

export default App