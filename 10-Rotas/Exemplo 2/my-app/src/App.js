import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Usuario from './Pages/Usuario';


function App() {
  return (
   
    <Router>
    <>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/sobre'>Sobre</Link> </li>
        <li> <Link to='/usuario'>Usuario</Link> </li>
      </ul>
    <Routes>
        <Route path='/' element={<Home />} />
      
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/usuario" element={<Usuario/>} />
         
      
      </Routes>
    </>
    </Router>
  );
}
 
export default App;

