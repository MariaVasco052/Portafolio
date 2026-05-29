import React, { useState, useEffect, useRef } from 'react';
import '../styles/experiencia.css';

const experiencias = [
  {
    empresa:  'TeChrea',
    rol:      'Analista Funcional QA',
    periodo:  'Feb 2026 – Actualidad',
    proyecto: 'Proyecto Red Hat – Banreservas',
    actual:   true,
    tipo:     'QA',
    items: [
      'Análisis funcional de requerimientos y validación de flujos en arquitectura de microservicios.',
      'Diseño y ejecución de pruebas funcionales, de integración y regresión.',
      'Automatización de pruebas de APIs con Karate, Java y Maven.',
      'Validación de contratos de servicios y estructuras JSON entre microservicios.',
      'Gestión de incidencias: identificación, documentación y seguimiento.',
      'Colaboración en equipos ágiles (QA, desarrollo y producto).',
    ],
    tags: ['Karate', 'Java', 'Maven', 'Microservicios', 'Jira', 'APIs'],
  },
  {
    empresa: 'Q10',
    rol:     'Analista de Pruebas',
    periodo: 'Abril 2025 – Enero 2026',
    actual:  false,
    tipo:    'QA',
    items: [
      'Diseño y ejecución de planes y casos de prueba.',
      'Pruebas funcionales, de integración, regresión y exploratorias.',
      'Automatización de pruebas con Selenium, Java y Serenity BDD (patrón POM).',
      'Pruebas de APIs para validación de integración entre servicios.',
      'Gestión del ciclo de pruebas en Jira.',
      'Pruebas funcionales en aplicaciones móviles.',
    ],
    tags: ['Selenium', 'Serenity BDD', 'Java', 'Jira', 'Mobile', 'APIs'],
  },
  {
    empresa: 'Servicios Nutresa',
    rol:     'Practicante Desarrollo TI',
    periodo: 'Agosto 2024 – Enero 2025',
    actual:  false,
    tipo:    'Dev',
    items: [
      'Apoyo en desarrollo de aplicaciones web.',
      'Implementación de automatización de pruebas con cumplimiento del 100% del plan.',
      'Validación de funcionalidades y gestión de incidencias.',
      'Trabajo colaborativo en equipos ágiles.',
    ],
    tags: ['Desarrollo Web', 'Automatización', 'Agile'],
  },
  {
    empresa: 'Clínica Las Américas AUNA',
    rol:     'Auxiliar de Gestión de la Información',
    periodo: 'Noviembre 2019 – Julio 2024',
    actual:  false,
    tipo:    'Data',
    items: [
      'Gestión y validación de datos clínicos.',
      'Análisis de información y generación de reportes en Power BI.',
      'Optimización de calidad de datos y procesos de información.',
    ],
    tags: ['Power BI', 'SQL', 'Calidad de Datos'],
  },
  {
    empresa: 'Aplistaff',
    rol:     'Auditoría de Cuentas Médicas',
    periodo: 'Enero 2014 – Noviembre 2019',
    actual:  false,
    tipo:    'Audit',
    items: [
      'Auditoría y validación de información documental.',
      'Control de calidad y precisión en procesos administrativos.',
    ],
    tags: ['Auditoría', 'Control de Calidad'],
  },
];

const TIPO_COLOR = {
  QA:    'tipo--qa',
  Dev:   'tipo--dev',
  Data:  'tipo--data',
  Audit: 'tipo--audit',
};

/* ── Hook visibilidad ── */
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

function Experiencia() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" ref={ref} className="exp-section">
      <h2 className={`exp-main-title ${inView ? 'exp-main-title--visible' : ''}`}>
        💼 Experiencia Profesional
      </h2>

      <div className="timeline">
        {experiencias.map(({ empresa, rol, periodo, proyecto, actual, tipo, items, tags }, i) => (
          <article
            key={empresa}
            className={`timeline-item ${inView ? 'timeline-item--visible' : ''} ${actual ? 'timeline-item--actual' : ''}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Línea / dot */}
            <div className="timeline-dot">
              {actual && <span className="dot-pulse" aria-label="Posición actual" />}
            </div>

            <div className="timeline-card">
              {/* Header */}
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-empresa">{empresa}</h3>
                  <p className="timeline-rol">{rol}</p>
                  {proyecto && <p className="timeline-proyecto">{proyecto}</p>}
                </div>
                <div className="timeline-meta">
                  <span className={`timeline-tipo ${TIPO_COLOR[tipo]}`}>{tipo}</span>
                  <span className="timeline-periodo">{periodo}</span>
                  {actual && <span className="timeline-badge-actual">Actual</span>}
                </div>
              </div>

              {/* Items */}
              <ul className="timeline-items">
                {items.map((item, j) => (
                  <li key={j} className="timeline-item-text">
                    <span className="timeline-bullet" aria-hidden="true">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="timeline-tags">
                {tags.map((tag) => (
                  <span key={tag} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Línea vertical de la timeline */}
        <div className="timeline-line" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Experiencia;