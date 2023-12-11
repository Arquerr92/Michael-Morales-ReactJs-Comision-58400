import NavBar from './components/NavBar/NavBar'
import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Inicio from './components/NavBar/Inicio';
import AcercaDeNosotros from './components/NavBar/AcercaDeNosotros';
import Contacto from './components/NavBar/Contacto';
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import Cart from './components/NavBar/Cart';




const App = () => {


  return (
    <div>

      <CartProvider>

      <BrowserRouter>
      <NavBar />

      <Routes>
      
      <Route exact path='/' element={<Inicio />} />
      <Route exact path='item/:id' element={<ItemDetailContainer />} />
      <Route exact path='tienda' element={<ItemListContainer />} />
      <Route exact path='tienda/:categoria' element={<ItemListContainer />} />
      <Route exact path='acercadenosotros' element={<AcercaDeNosotros />} />
      <Route exact path='contacto' element={<Contacto />} />
      <Route exact path='cart' element={<Cart />} />
      <Route exact path='checkout' element={<Checkout/>} />

      <Route path='*' element={<Navigate replace to="/"/> } />

      </Routes>

    </BrowserRouter>

    </CartProvider>

    </div>
    
  )
}

export default App