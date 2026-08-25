import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import FotoHV from './images/FotoHV.png';
import Sobremi from './components/Sobremi';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Contacto from './components/Contacto';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* ── HERO ── */}
      <header className="hero" id="home">
        <div className="hero-orb hero-orb--1" aria-hidden="true" />
        <div className="hero-orb hero-orb--2" aria-hidden="true" />

        <div className={`hero-content ${visible ? 'hero-content--visible' : ''}`}>
          {/* Foto con anillo animado */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring" aria-hidden="true" />
            <img src={FotoHV} className="hero-photo" alt="María Alejandra Vasco Pineda" />
          </div>

          {/* Texto */}
          <div className="hero-text">
            <p className="hero-badge">
              <span className="hero-badge-dot" /> Disponible para nuevas oportunidades
            </p>
            <h1 className="hero-name">
              María Alejandra<br />
              <span className="hero-name--accent">Vasco Pineda</span>
            </h1>
            <p className="hero-role">
              <span className="hero-role-keyword">const</span> role ={' '}
              <span className="hero-role-string">"QA Engineer &amp; Software Developer"</span>
            </p>
            <p className="hero-subtitle">
              Automatización con · Karate · Selenium · Serenity BDD ·
            </p>
            <div className="hero-actions">
              <a href="/documents/HojaDeVida.pdf" download className="btn-primary">
                ↓ Descargar CV
              </a>
              <a href="#about" className="btn-outline">
                Sobre mí
              </a>
              <a
                href="https://www.linkedin.com/in/maria-alejandra-vasco-pineda-9b240b218"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.447 20.452H17.24V14.8c0-1.344-.027-3.074-1.874-3.074-1.876 0-2.163 1.462-2.163 2.973v5.754H10.01V9h3.074v1.56h.043c.428-.81 1.473-1.667 3.03-1.667 3.241 0 3.84 2.135 3.84 4.91v6.25z" fill="#0A66C2"/>
                  <path d="M6.337 7.433a1.786 1.786 0 1 1 0-3.573 1.786 1.786 0 0 1 0 3.573z" fill="#0A66C2"/>
                  <path d="M7.124 20.452H5.55V9h1.574v11.452z" fill="#0A66C2"/>
                  <path d="M2 2.005h20v20H2v-20z" fill="none"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </header>

      <main>
        <Sobremi />
        <Experiencia />
        <Educacion />
        <Contacto />
      </main>
    </div>
  );
}

export default App;