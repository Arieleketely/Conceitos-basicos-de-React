import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Routes from './Routes';

import Logo from './Imagens/container.png';

function App () {
  return (
    <div>
      <header>
           <Link  to="/">Home</Link>
        <Link to='/SobreEmpresa'>Sobre</Link>
        <Link to='/Contato'>Contato</Link>
        <Link to='/Orcamento'>Orcamento</Link>
        <Link to='/Portifolio'>Portifolio</Link>
       </header>
       <img src={Logo}/>
    </div>    
  );
};

export default App;
