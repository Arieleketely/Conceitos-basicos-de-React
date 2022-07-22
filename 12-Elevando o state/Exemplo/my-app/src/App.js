import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import react,{useState} from 'react';
import Peso from './Componente/Peso';
import Total from './Componente/Total';


function App() {
  const [peso1,setPeso1]=useState()
  const [peso2,setPeso2]=useState()
  const [peso3,setPeso3]=useState()
  return (
    <div>
<Peso p={1} peso={peso1} setPeso={setPeso1}/>
<Peso p={2} peso={peso2} setPeso={setPeso2}/>
<Peso p={3} peso={peso3} setPeso={setPeso3}/>
<Total somaPeso={parseFloat(peso1)+parseFloat(peso2)+parseFloat(peso3)}/>
    </div>
  );
}

export default App;
