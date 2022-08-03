
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Usuario from './Pages/Usuario';
import Navbar from './Pages/Navbar';
export default function App() {
   return (
<>
    <h1>Rotas</h1>
       
   <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/usuario" element={<Usuario/>} />
</Routes>
       
       </>
   );
}