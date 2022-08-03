import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Routes from './Routes';
import SobreEmpresa from './PaginasExtras/SobreEmpresa';

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
       
       

    </div>
       
  );
};

export default App;
