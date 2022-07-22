import React,{Component}  from 'react';
class Welcome extends Component{
  render(){
    const {nomeDomeio,nomeUltimo} = this.props;
    return(
    <h1>
    Bem vindo(a) {nomeDomeio}{nomeUltimo}
    </h1> 
    );
  }
}
function App() {
  return (
  <div>
<h1>Nomes:</h1>
<Welcome
  nomeDomeio="Ketely "
  nomeUltimo="Carmo"
/>

    </div>
  );
}

export default App;
