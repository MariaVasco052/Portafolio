import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Inicio',    href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia',href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeLink,setActiveLink]= useState('#home');

  // Glassmorphism al bajar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.navbar-container')) setMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Navegación principal">
      {/* Logo / Iniciales */}
      <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('#home')}>
        MAVP<span className="navbar-logo-dot">.</span>
      </a>
      {/* Emoji centrado decorativo */}
      <div className="navbar-center-emoji" aria-hidden="true">👩‍💻</div>
      {/* Links escritorio */}
      <ul className="navbar-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`navbar-link ${activeLink === href ? 'navbar-link--active' : ''}`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Botón hamburguesa */}
      <button
        className={`hamburguesa ${menuOpen ? 'hamburguesa--open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className="hamburguesa-bar" />
        <span className="hamburguesa-bar" />
        <span className="hamburguesa-bar" />
      </button>

      {/* Menú móvil */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`mobile-menu-link ${activeLink === href ? 'mobile-menu-link--active' : ''}`}
            onClick={() => handleLinkClick(href)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;