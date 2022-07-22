import React, { useState } from 'react';
import './App.css';

function App() {

  const [estado, setEstado] = useState(4);
  const [cor, setCor] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const editarEstado = e => {
    e.preventDefault();
    alert("ID do estado: " + estado);
  }

function handleSubmit(event){
  event.preventDefault();
  console.log(event);
}



function handleChange(event){
  event.preventDefault();
  console.log(email);
}


  return (
    <div>
     <form  onSubmit={handleSubmit}>
       <label htmlFor="nome">nome</label>
    <input type="text"
    id="nome"
    type="text"
    name="nome"
    value={nome}  
    onChange={(event)=>setNome(event.target.value)}
    />
</form>
<form  onSubmit={handleChange}>

<label htmlFor="email">email</label>
<input type="text"
    id="email"
    type="email"
    name="email"
    value={email}  
    onChange={(event)=>setEmail(event.target.value)}
    />

    
      <label>
        <input
        
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'feminino'}
          value="feminino"
        />
        Feminino    <br/>
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'masculino'}
          value="masculino"
        />
        Maculino   <br/>
      </label>
    <br/>

</form>



      <form onSubmit={editarEstado}>
        <label>Estado: </label>
        <select name="estado" value={estado} onChange={texto => setEstado(texto.target.value)}>
          <option value="">Selecione</option>
          <option value="1">RS</option>
          <option value="2">SC</option>
          <option value="3">PR</option>
          <option value="4">SP</option>
        </select><br /><br />



        <button type="submit">Editar</button>

      </form>
    </div>
  );
}

export default App;


