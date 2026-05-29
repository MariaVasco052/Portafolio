# Portafolio — María Alejandra Vasco (MAVP)

Este repositorio contiene el sitio web de portafolio personal de María Alejandra Vasco. Está construido con React (Create React App) y pensado para mostrar experiencia, proyectos, habilidades y un formulario de contacto integrado con EmailJS.

**Resumen rápido**

- Stack: React, CSS personalizado, EmailJS (@emailjs/browser)
- Diseño: tema oscuro, fuentes Syne + DM Sans, enfoque responsive

**Enlace al archivo principal:** [src/App.js](src/App.js)

## Estructura principal

- `public/` — archivos estáticos (index.html, iconos, manifest)
- `src/` — código fuente
  - `src/components/` — componentes React (Navbar, Contacto, Habilidades, Educacion, Sobremi, etc.)
  - `src/styles/` — hojas de estilo CSS por sección
  - `src/index.js`, `src/App.js` — punto de entrada y componente raíz

## Requisitos

- Node.js 16+ y npm

## Instalación y ejecución (desarrollo)

Clona el repositorio, instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm start
```

Abre http://localhost:3000 en tu navegador.

## Variables de entorno (EmailJS)

Para que el formulario de contacto funcione con EmailJS, crea un archivo `.env` en la raíz (ya está ignorado por git) con estas variables:

- `REACT_APP_EMAILJS_SERVICE_ID` — ID del servicio en EmailJS
- `REACT_APP_EMAILJS_TEMPLATE_ID` — ID de la plantilla
- `REACT_APP_EMAILJS_PUBLIC_KEY` — clave pública (antes PUBLIC_KEY)

Ejemplo `.env` (no subir al repositorio):

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_yyy
REACT_APP_EMAILJS_PUBLIC_KEY=public_zzz
```

Tras añadir las variables, reinicia el servidor de desarrollo.

## Cómo funciona el formulario de contacto

- El componente `src/components/Contacto.js` usa `@emailjs/browser` para enviar `from_name` y `message` al template configurado.
- Solo se requieren `Nombre` y `Mensaje` en el formulario.

## Estilos y temas

- Las variables globales están en `src/styles/App.css` (colores, tipografías, `--font-size-base`).
- Las hojas por sección están en `src/styles/`:
  - `habilidades.css`, `educacion.css`, `sobremi.css`, `contacto.css`, `experiencia.css`, `navbar.css`.

## Desarrollo y pruebas

- Ejecutar linter o tests (si existen) con:

```bash
npm test
```

## Despliegue

- Construir para producción:

```bash
npm run build
```

- El contenido preparado quedará en la carpeta `build/` listo para servir en cualquier hosting estático.

## Contribuciones

- Si quieres sugerir mejoras o corregir contenido, abre un issue o pull request. Para cambios locales: crea una rama, haz commits claros y abre PR.

## Contacto

- Correos:
maria.alejandravp@hotmail.com
maria.alejandravp93@gmail.com

---
