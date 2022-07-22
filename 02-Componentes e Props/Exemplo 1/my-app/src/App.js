import logo from './logo.svg';
import './App.css';

function welcome(props){
  return <h1>Bem vindo(a) {props.name}</h1>
}
function App() {
  return (
  <div>
<h1>Nomes:</h1>
{welcome({name:'Ariele'})}
{welcome({name:'Carolina'})}
{welcome({name:'Braz'})}
    </div>
  );
}

export default App;
