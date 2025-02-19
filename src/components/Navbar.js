import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <Nav variant="pills" defaultActiveKey="/" className="navbar">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">Sobre mí</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Botón de hamburguesa solo visible en dispositivos pequeños */}
      <button className="hamburguesa" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#5f6368"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="hamburguesa-menu">
          <Nav className="hamburguesa-links">
            <Nav.Item>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">Sobre mí</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
