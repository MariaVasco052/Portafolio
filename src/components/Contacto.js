import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contacto.css';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-panel">
          <p className="contact-label">Contacto</p>
          <h2 className="contact-title">Escríbeme un mensaje</h2>
          <p className="contact-description">
            Usa el formulario y tu mensaje llegará directo a mis dos correos.
          </p>
          <div className="contact-email-list">
            <a href="mailto:maria.alejandravp@hotmail.com">maria.alejandravp@hotmail.com</a>
            <a href="mailto:maria.alejandravp93@gmail.com">maria.alejandravp93@gmail.com</a>
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </label>

          <label className="contact-field contact-field--message">
            <span>Mensaje</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              rows="6"
              required
            />
          </label>

          <button type="submit" className="contact-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {status === 'success' && (
            <p className="contact-feedback contact-feedback--success">
              Tu mensaje se envió correctamente. Gracias.
            </p>
          )}

          {status === 'error' && (
            <p className="contact-feedback contact-feedback--error">
              Ocurrió un error. Por favor intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
