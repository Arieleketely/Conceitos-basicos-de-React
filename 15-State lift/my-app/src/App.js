
import './App.css';
import { useState } from 'react';
import SeuNome from './Componentes/SeuNome/index'
import Saudacao from './Componentes/Saudacao/index'





function App() {
 const [nome,setNome]= useState()
  return (
    <>
<h1>State lift:</h1>
    <SeuNome setNome={setNome}/>
    {nome}
    <Saudacao nome={nome}/>
    </>
  );
}

export default App;
