import React from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/navbar.css';

function Navbar() {
  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about">Sobre mí</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#mieducacion">Educación</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Proyectos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contacto</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
