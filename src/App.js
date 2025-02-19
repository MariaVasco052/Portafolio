import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar'; // Importa el Navbar
import FotoHV from './images/FotoHV.png'; // Importamos la foto de perfil
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
            Hola, soy <code className="minombre">María Alejandra Vasco Pineda</code>
          </p>
          <img src={FotoHV} className="miFoto" alt="miFoto" />
        </section>

      {/* Usa el componente Sobremi */}
      <Sobremi/>


      </main>
    </div>
  );
}

export default App;