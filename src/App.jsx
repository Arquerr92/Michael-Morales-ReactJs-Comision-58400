import React from 'react'
import NavBar from './components/NavBar/NavBar'
import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Inicio from './components/NavBar/Inicio';
import Tienda from './components/NavBar/Tienda';
import AcercaDeNosotros from './components/NavBar/AcercaDeNosotros';
import Contacto from './components/NavBar/Contacto';



const App = () => {

  

  return (
    <div>
      
      <BrowserRouter>
      <NavBar />

      <Routes>
      
      <Route exact path='/' element={<Inicio />} />
      <Route exact path='item/:id' element={<ItemDetailContainer />} />
      <Route exact path='tienda' element={<ItemListContainer />} />
      <Route exact path='tienda/:categoria' element={<ItemListContainer />} />
      <Route exact path='acercadenosotros' element={<AcercaDeNosotros />} />
      <Route exact path='contacto' element={<Contacto />} />

      <Route path='*' element={<Navigate replace to="/"/> } />

      </Routes>

    </BrowserRouter>
    
    </div>
    
  )
}

export default App