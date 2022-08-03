
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  return(
  <div className='cor'>
    
    <ul>
            <li>
            <Link  to="/home">Home</Link>
            </li>
            <li>
            <Link to='/sobre'>Sobre</Link>
            </li>
         </ul>
  </div>
  )
}

export default Navbar;