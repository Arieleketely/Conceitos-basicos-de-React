import React from "react";

import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div>
  <Link to="/">Home</Link>
        <Link to='/SobreEmpresa'>Sobre</Link>
        <Link to='/Contato'>Contato</Link>
        <Link to='/Orcamento'>Orcamento</Link>
        <Link to='/Portifolio'>Portifolio</Link>
</div>
        
    )
}
export default Header;