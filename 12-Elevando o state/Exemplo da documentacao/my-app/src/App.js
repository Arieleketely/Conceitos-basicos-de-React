import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import react,{useState} from 'react';
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;

    return (
      
      <fieldset>
       
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
function App() {
  return (
    <div>

    </div>
  );
}

export default App;
