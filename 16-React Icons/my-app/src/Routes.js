import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
    
import App from './App';

import SobreEmpresa from './PaginasExtras/SobreEmpresa';
import Contato from './PaginasExtras/Contato';
import Orcamento from './PaginasExtras/Orcamento';
import Portifolio from './PaginasExtras/Portifolio';

export default function Routes(){
    return(
       
            <Router>
                <Route path='/' exact component={App} />
                <Route path='/sobre-empresa' component={SobreEmpresa} />
                <Route path='/contato' component={Contato} />
                <Route path='/Orcamento' component={Orcamento} />
                <Route path='/Portifolio' component={Portifolio} />
            </Router>        
      
    );
}