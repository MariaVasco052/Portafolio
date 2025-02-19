import React, { useState, useEffect } from "react";
import "../styles/habilidades.css";

// Lista de imágenes del carrusel
const habilidades = [
    "html.png",
    "css.png",
    "js.png",
    "csharp.png",
    "java-icon.png",
    "react.png",
    "git.png",
    "bootstrap.png",
    "intellij.png",
    "selenium.png",
    "gradle.png",
    "Postman.png",
    "postgre.png",
    "icons8-logo-de-mysql-240.png",
    "powerbi.png",
];

const skillsoft = [
    { name: "Trabajo en equipo", description: "Colaboro eficazmente con otros." },
    { name: "Comunicación efectiva", description: "Expreso ideas con claridad." },
    { name: "Adaptabilidad", description: "Me ajusto a cambios sin problemas." },
    { name: "Liderazgo", description: "Guío y motivo a mi equipo." },
];

const Habilidades = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Efecto para cambiar de imagen automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % habilidades.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="skills-container">
            <h3 className="skills-title"><code>Habilidades Técnicas</code></h3>
            <div className="carousel">
                <div className="carousel-inner">
                    {habilidades.map((img, index) => (
                        <img
                            key={index}
                            src={`/icons/${img}`}
                            alt={`Habilidad ${index + 1}`}
                            className={index === currentIndex ? "active" : "hidden"}
                        />
                    ))}
                </div>
            </div>

            {/* Sección de Habilidades Blandas */}
            <SoftSkills />
        </div>
    );
};

const SoftSkills = () => {
    return (
        <div className="softskills-container">
            <h3 className="softskills-title"><code>Habilidades Blandas</code></h3>
            <div className="skills-grid">
                {skillsoft.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="card-inner">
                            <div className="card-front">
                                <p>{skill.name}</p>
                            </div>
                            <div className="card-back">
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Habilidades, SoftSkills };