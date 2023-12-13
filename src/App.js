import React from 'react';
import './App.css';
import { NavBar } from './componentes/NavBar';
import {Footer} from './componentes/Footer';
import { Cupones} from '../src/componentes/Cupones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menus from './componentes/Menus';
import Restaurantes from './componentes/Restaurantes';
import Novedades from './componentes/Novedades';
import Delivery from './componentes/Delivery';
import Contactos from './componentes/Contactos';
import Nosotros from './componentes/Nosotros';
import Registrarse from './componentes/Registrarse';
import Check from './componentes/Check';
import {Inicio} from './componentes/Inicio';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/menus' element={<Menus/>}></Route>
          <Route path='/cupones' element={<Cupones/>}></Route>
          <Route path='/restaurantes' element={<Restaurantes/>}></Route>
          <Route path='/novedades' element={<Novedades/>}></Route>
          <Route path='/delivery' element={<Delivery/>}></Route>
          <Route path='/contactos' element={<Contactos/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/registrarse' element={<Registrarse/>}></Route>
          <Route path='/check' element={<Check/>}></Route>
        </Routes>    
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
