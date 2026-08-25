import React, { useState, useEffect, useRef } from 'react';
import '../styles/sobremi.css';
import { Habilidades } from './Habilidades';

function Sobremi() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-container ${isVisible ? 'visible' : ''}`}
    >
      <h2 className={`about-title ${isVisible ? 'visible' : ''}`}>
        <span className="hello">👋🏼</span> Sobre Mí
      </h2>

      <div className="about-columns">
        {/* Columna principal */}
        <div className="about-me">
          <p className="profesion">
            Soy <code className="grado">QA Engineer</code> egresada de la Tecnología en Desarrollo de Software
            de la Universidad Pascual Bravo (Medellín, Colombia), y estudiante de Ingeniería de Software.
          </p>
          <p className="profesion">
            Me especializo en el <strong>diseño, ejecución y automatización de pruebas</strong> para
            garantizar la estabilidad y confiabilidad de soluciones tecnológicas. He trabajado en
            validación de funcionalidades, gestión de incidencias y equipos ágiles, aportando desde
            el análisis funcional y la mejora continua del proceso de testing.
          </p>
          <p className="profesion">
            Cuento con experiencia en automatización con <code className="tag">Selenium + Java + Serenity BDD</code>,
            automatización de microservicios con <code className="tag">Karate + Maven</code>, pruebas
            de APIs, validación de datos con SQL y gestión en{' '}
            <code className="tag">Jira</code> y <code className="tag">Azure DevOps</code>.
          </p>

          <Habilidades />

          <p className="habilidades-extra">
            Me destaco por mi atención al detalle, pensamiento analítico y comunicación asertiva.
            Tengo pasión por garantizar la calidad del producto en todas sus etapas del ciclo de vida.
          </p>
        </div>

        {/* Columna CV */}
        <div className="about-hv">
          <div className="about-hv-icon" aria-hidden="true">📋</div>
          <h3 className="hv">Mi Hoja<br />de Vida</h3>
          <a href="/documents/HojaDeVida.pdf" download className="btn-download">
            ↓ Descargar CV
          </a>
          <div className="about-hv-stats">
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">años en QA</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">empresas</span>
            </div>
          </div>
          <div className="contact-actions">
            <a
              className="btn-linkedin"
              href="https://www.linkedin.com/in/maria-alejandra-vasco-pineda-9b240b218"
              target="_blank"
              rel="noopener noreferrer"
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
    </section>
  );
}

export default Sobremi;