import React, { useState, useEffect, useRef } from "react"; // Necesario para la animación
import { Card, Container } from "react-bootstrap";
import '../styles/educacion.css';

function Educacion() {
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
    
        if (section) {
            observer.observe(section);
        }
    
        return () => {
            if (section) {
            observer.unobserve(section);
            }
        };
    }, []);
    
    return (
        <section id="mieducacion" ref={sectionRef}>
            <Container id="education" className="education-container">
            <h2 className={`education-title ${isVisible ? "visible" : ""}`}>
                <span className="hat">🎓</span>Educación</h2>
            <Card className="education-card">
            <Card.Body>
                <Card.Title className="education-title">Tecnóloga en Desarrollo de Software</Card.Title>
                <Card.Subtitle className="education-subtitle">
                Universidad Pascual Bravo, Medellín - Colombia <br/> 2025
                </Card.Subtitle>
                <Card.Text className="education-text">
                En este programa adquirí conocimientos en desarrollo web, bases de datos y metodologías ágiles.
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
      </section>
    );
}

export default Educacion;