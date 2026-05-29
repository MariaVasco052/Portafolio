import React, { useState, useEffect, useRef } from 'react';
import '../styles/educacion.css';

const educacion = [
  {
    titulo:       'Ingeniería en Desarrollo de Software',
    institucion:  'Universidad Pascual Bravo',
    lugar:        'Medellín, Colombia',
    periodo:      'Actualmente',
    actual:       true,
    icon:         '🎓',
  },
  {
    titulo:       'Tecnología en Desarrollo de Software',
    institucion:  'Universidad Pascual Bravo',
    lugar:        'Medellín, Colombia',
    periodo:      '2025',
    actual:       false,
    icon:         '🎓',
  },
  {
    titulo:       'Bases de Datos PostgreSQL',
    institucion:  'Unisabaneta',
    lugar:        'Colombia',
    periodo:      '2022',
    actual:       false,
    icon:         '🗄️',
  },
  {
    titulo:       'Tecnología en Gestión de Procesos Administrativos en Salud',
    institucion:  'SENA',
    lugar:        'Colombia',
    periodo:      '2020',
    actual:       false,
    icon:         '📋',
  },
  {
    titulo:       'Bachiller Académico',
    institucion:  'Liceo Salazar y Herrera',
    lugar:        'Medellín, Colombia',
    periodo:      '2010',
    actual:       false,
    icon:         '📚',
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Educacion() {
  const [ref, inView] = useInView();

  return (
    <section id="education" ref={ref} className="education-section">
      <h2 className={`education-main-title ${inView ? 'education-main-title--visible' : ''}`}>
        📚 Educación
      </h2>

      <div className="education-grid">
        {educacion.map(({ titulo, institucion, lugar, periodo, actual, icon }, i) => (
          <div
            key={titulo}
            className={`edu-card ${inView ? 'edu-card--visible' : ''} ${actual ? 'edu-card--actual' : ''}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="edu-icon" aria-hidden="true">{icon}</div>
            <div className="edu-body">
              <p className="edu-titulo">{titulo}</p>
              <p className="edu-institucion">{institucion}</p>
              <p className="edu-lugar">{lugar}</p>
            </div>
            <div className="edu-periodo">
              {actual
                ? <span className="edu-badge-actual">En curso</span>
                : <span className="edu-year">{periodo}</span>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educacion;