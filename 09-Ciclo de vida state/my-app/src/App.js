
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    valor: false,
  };

  componentDidMount() {
    console.log('frase no console');

    // Trigger update
    this.setState({ valor: !this.state.valor });
    console.log(this.state.valor);
  }

  render() {
    console.log('oi')
    
    return <h1>Frase</h1>
  }
}
export default App;


