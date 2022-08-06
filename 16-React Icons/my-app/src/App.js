import React from "react";

import './App.css';

import SobreEmpresa from './PaginasExtras/SobreEmpresa';
import Contato from './PaginasExtras/Contato';
import Orcamento from './PaginasExtras/Orcamento';
import Porfifolio from "./PaginasExtras/Portifolio";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';




function App () {
  return (
  
          <BrowserRouter>
          
          <>
<nav>
           <Link  to="/">Home</Link>
        <Link to='/SobreEmpresa'>Sobre</Link>
        <Link to='/Contato'>Contato</Link>
        <Link to='/Orcamento'>Orcamento</Link>
        <Link to='/Portifolio'>Portifolio</Link>
     </nav>
        <Routes>     
       <Route path="/sobreEmpresa" element={<SobreEmpresa/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/orcamento" element={<Orcamento/>} />
          <Route path="/portifolio" element={<Porfifolio/>} />
      </Routes>
 
    </>
    </BrowserRouter>   
  );
};

export default App;
