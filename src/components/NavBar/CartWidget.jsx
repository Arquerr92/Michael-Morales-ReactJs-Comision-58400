import React, { useContext } from 'react'
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { CartContext } from '../../context/CartContext';




export const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext)


  return (
    <div>
        
        <Nav.Link className='nav-nombre' as={Link} to="/cart">
          <i className="bi bi-cart-fill cart-icon"></i>
          <span className="numerito">{cantidadEnCarrito()}</span>
        </Nav.Link>
      
    </div>
  )
}
export default CartWidget