import logo from './logo.svg';
import './App.css';

const App = () =>{
  //const randon = Math.random();
 // return <p>{(randon * 1000)/50}</p>
    const cores=[
      
       {cor:'Azul',aspecto:'escuro',quantidade:4},
       {cor:'Verde',aspecto:'claro',quantidade:7},
      {cor:'Amarelo',aspecto:'escuro',quantidae:10},
    ]; 
    
     return (
    <div>
<ul>
  {cores
 .filter(({aspecto})=>aspecto =="escuro") 
  .map(({cor,aspecto}) => (
    <li key = {cor} >{cor}-{aspecto}</li>
  ))}
  </ul>
 

    <a href="http://www.google.com/" title="titulo">Ariele</a>
    <label htmlFor="cor">Nome</label>
    <input type="text" id="nome"/>
    </div>
  );
}

export default App;