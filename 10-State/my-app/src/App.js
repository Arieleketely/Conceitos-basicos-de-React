import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [numero,setNumero]=useState(2);
  return (
    <div>
  <p>numero{numero}</p>
  <button onClick={()=>setNumero(numero*2)}>Dobrar</button>
    </div>
  );
}

export default App;
