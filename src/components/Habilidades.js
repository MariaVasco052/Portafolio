import React, { useState, useEffect, useRef } from 'react';
import '../styles/habilidades.css';

/* ─────────────────────────────────────────────────────────
   SKILLS — organizadas por categoría QA
   Nota: agrega los íconos que no tengas a /public/icons/
   Sugerencia de fuente: https://devicons.dev  o  SVGRepo
───────────────────────────────────────────────────────── */
const categorias = [
  {
    titulo: '🧪 Automatización de Pruebas',
    skills: [
      { name: 'Selenium',    img: 'selenium.png' },
      { name: 'Java',        img: 'java-icon.png' },
      { name: 'Serenity BDD',img: 'serenity.png' },   // ← agregar ícono
      { name: 'Karate',      img: 'karate.png' },      // ← agregar ícono
      { name: 'Maven',       img: 'maven.png' },       // ← agregar ícono
    ],
  },
  {
    titulo: '🔌 APIs & Servicios',
    skills: [
      { name: 'Postman',  img: 'Postman.png' },
      { name: 'Swagger',  img: 'swagger.png' },        // ← agregar ícono
      { name: 'Karate',   img: 'karate.png' },
    ],
  },
  {
    titulo: '🗄️ Datos',
    skills: [
      { name: 'SQL',        img: 'sql.png' },          // ← agregar ícono
      { name: 'PostgreSQL', img: 'postgre.png' },
      { name: 'MySQL',      img: 'icons8-logo-de-mysql-240.png' },
      { name: 'Power BI',   img: 'powerbi.png' },
    ],
  },
  {
    titulo: '🛠️ Herramientas & Dev',
    skills: [
      { name: 'Jira',          img: 'jira.png' },      // ← agregar ícono
      { name: 'Azure DevOps',  img: 'azure.png' },     // ← agregar ícono
      { name: 'Git',           img: 'git.png' },
      { name: 'IntelliJ',      img: 'intellij.png' },
      { name: 'Gradle',        img: 'gradle.png' },
    ],
  },
  {
    titulo: '💻 Desarrollo Web',
    skills: [
      { name: 'HTML',      img: 'html.png' },
      { name: 'CSS',       img: 'css.png' },
      { name: 'JavaScript',img: 'js.png' },
      { name: 'React',     img: 'react.png' },
      { name: 'Bootstrap', img: 'bootstrap.png' },
    ],
  },
];

const habilidadesBlandas = [
  { name: 'Atención al detalle',   desc: 'Identifico errores que otros pasan por alto.' },
  { name: 'Comunicación asertiva', desc: 'Transmito hallazgos con claridad al equipo.' },
  { name: 'Pensamiento analítico', desc: 'Analizo flujos y detecto causas raíz.' },
  { name: 'Trabajo en equipo',     desc: 'Colaboro en equipos ágiles multidisciplinarios.' },
  { name: 'Adaptabilidad',         desc: 'Me ajusto rápido a nuevas tecnologías y contextos.' },
  { name: 'Mejora continua',       desc: 'Propongo optimizaciones en el proceso de testing.' },
];

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

/* ── Componente principal ── */
const Habilidades = () => {
  const [ref, inView] = useInView();

  return (
    <div className="skills-section" ref={ref}>
      <h3 className={`skills-heading ${inView ? 'skills-heading--visible' : ''}`}>
        Stack Técnico
      </h3>

      {/* Una grilla por categoría */}
      {categorias.map(({ titulo, skills }, ci) => (
        <div key={titulo} className="skills-categoria">
          <p className="skills-categoria-label">{titulo}</p>
          <div className="skills-grid">
            {skills.map(({ name, img }, i) => (
              <div
                key={name}
                className={`skill-card ${inView ? 'skill-card--visible' : ''}`}
                style={{ animationDelay: `${(ci * 100) + i * 60}ms` }}
              >
                <img
                  src={`/icons/${img}`}
                  alt={name}
                  className={`skill-card-icon ${['serenity.png', 'maven.png'].includes(img) ? 'skill-card-icon--larger' : ''}`}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="skill-card-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SoftSkills inView={inView} />
    </div>
  );
};

/* ── Habilidades Blandas ── */
const SoftSkills = ({ inView }) => (
  <div className="softskills-section">
    <h3 className={`skills-heading ${inView ? 'skills-heading--visible' : ''}`}
        style={{ animationDelay: '400ms' }}>
      Habilidades Blandas
    </h3>
    <div className="softskills-grid">
      {habilidadesBlandas.map(({ name, desc }, i) => (
        <div
          key={name}
          className={`flip-card ${inView ? 'flip-card--visible' : ''}`}
          style={{ animationDelay: `${450 + i * 70}ms` }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front"><span>{name}</span></div>
            <div className="flip-card-back"><span>{desc}</span></div>
          </div>
        </div>
      ))}
    </div>
    <p className="softskills-hint">Pasa el cursor sobre cada tarjeta</p>
  </div>
);

export { Habilidades, SoftSkills };