import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import FormPicker from './form_picker';
import WellCode from '../components/well_code';

class App extends Component {
  render() {
    const madeByStyles = {
      textAlign:"center",
      background: "#eee",
      margin:"0"
    }
    return (
      <div className="container">
        <div className="row">
          <h4 style={madeByStyles}>Application created by: <a href="http://blaynemarjama.surge.sh" target="_blank" rel="noopener noreferrer">Blayne Marjama</a></h4>
          <h4 style={madeByStyles}>Source Code Available on <a href="https://github.com/blaynem/form-builder" target="_blank" rel="noopener noreferrer">Github</a></h4>
        </div>
        <div className="row">
          <Jumbotron>
            <h2 style={{textAlign:"center"}}>Easy Form Creator</h2>
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