import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css";
import "../ItemListContainer/ItemListContainer.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function CollapsibleExample() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-success">
      <Container>
        
        <Navbar.Brand className='nav-nombre' as={Link} to="/"><img src="./src/assets/img/logo-transparente.webp" width={100} alt="logo" />AlienShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='nav-nombre' as={Link} to="/">INICIO</Nav.Link>
            <Nav.Link className='nav-nombre' as={Link} to="/tienda">TIENDA</Nav.Link>
            <Nav.Link className='nav-nombre' as={Link} to="/tienda/Cervezas">CERVEZA</Nav.Link>
            <Nav.Link className='nav-nombre' as={Link} to="/tienda/Comida">COMIDA</Nav.Link>
            <Nav.Link className='nav-nombre' as={Link} to="/acercaDeNosotros">ACERCA DE NOSOTROS</Nav.Link>
            <Nav.Link className='nav-nombre' as={Link} to="/contacto">CONTACTO</Nav.Link>
            <Nav.Link> <CartWidget /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  );
}

export default CollapsibleExample;