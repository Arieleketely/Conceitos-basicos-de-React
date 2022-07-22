import logo from './logo.svg';
import './App.css';
import React from 'react';
const App = () =>{
 function mostrarnome(sobrenome){
  return 'Ariele' + sobrenome;
}

  const randon = Math.random();
  const ativo=true;
 return <p className={ativo ? 'ativo':'inativo'}>{(randon * 1000) /50}</p>;

{mostrarnome('Ketely')}
};
export default App;