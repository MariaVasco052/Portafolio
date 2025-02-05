import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar'; // Importa el Navbar
import FotoHV from './images/FotoHV.png'; // Importamos la foto de perfil
import Educacion from './components/Educacion'; // Importa el componente Educacion
import Sobremi from './components/Sobremi';

function App() {
  return (
    <div className="App">

      {/* Usa el componente Navbar */}
      <Navbar />

      <header className="App-header">
        <h1 className="tituloppal">Mi portafolio</h1>
      </header>

      <main>
        <section id="home">
          <p className="Inicio">
            Hola, soy <code className="minombre">María Alejandra Vasco</code> y este es mi portafolio.
          </p>
          <img src={FotoHV} className="miFoto" alt="miFoto" />
        </section>

      {/* Usa el componente Sobremi */}
      <Sobremi/>

      {/* Usa el componente Educación */}
      <Educacion/>

      </main>
    </div>
  );
}

export default App;