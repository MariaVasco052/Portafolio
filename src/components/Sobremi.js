import React, { useState, useEffect, useRef } from "react";
import '../styles/sobremi.css';
import {Habilidades, SoftSkills} from "./Habilidades";



function Sobremi() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
        );

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="about" ref={sectionRef} className="about-container">
            {/* Título Central */}
            <div className="about-center">
                <h2 className={`about-title ${isVisible ? "visible" : ""}`}>
                    <span className="hello">👋🏼</span> Sobre Mí
                </h2>
            </div>

            {/* Contenedor de dos columnas */}
            <div className="about-columns">
                
                {/* Columna Derecha */}
                <div className="about-me"> {/*right*/}
                    <p className="profesion">
                        Soy <code className="grado">Tecnóloga en Desarrollo de Software</code> de la Institución Universitaria Pascual Bravo en Medellín - Colombia. <br/><br/>

                        
                    </p>
                     
                     {/* Usa el componente habilidades */}
                        <Habilidades/>
                                           
                    <p className="habilidades">
                        <br/>
                        Me apasiona la tecnología y la programación. Cuento con habilidades para el Desarrollo de Software y pruebas automatizadas. 
                        Puedo contribuir al éxito de proyectos innovadores, mientras continúo aprendiendo y creciendo en un entorno profesional y colaborativo.
                    </p>

                    
                </div>

                {/* Columna Izquierda */}
                <div className="about-hv">
                    <h3 className="hv">Esta es mi Hoja de Vida</h3>
                    <a href="/documents/HojaDeVida.pdf" download className="btn-download">
                        Descargar CV
                    </a>
                </div>
            </div>  
        </section>
    );
}

export default Sobremi;
