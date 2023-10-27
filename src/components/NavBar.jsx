import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function CollapsibleExample() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-success">
      <Container>
        <Navbar.Brand className='nav-nombre' href="#home"><img src="./src/assets/img/logo-transparente.webp" width={100} alt="logo" />AlienShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='nav-nombre' href="#home">INICIO</Nav.Link>
            <Nav.Link className='nav-nombre' href="#Tienda">TIENDA</Nav.Link>
            <Nav.Link className='nav-nombre' href="#AcercaDeNosotros">ACERCA DE NOSOTROS</Nav.Link>
            <Nav.Link className='nav-nombre' href="#Contacto">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    
    
    </>
  );
}

export default CollapsibleExample;