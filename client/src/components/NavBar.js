import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function NavBar() {
  
  return (

    <Navbar bg="dark" variant='dark' expand="lg">
      <Container  fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/articles' className='nav-link'>Articoli</Link>
            <Link to='/contact' className='nav-link'>Contattaci</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}