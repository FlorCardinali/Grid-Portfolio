import './App.css'
import {useEffect } from 'react';
import Modulo_uno from './components/Modulo_uno.js';
import Modulo_dos from './components/Modulo_dos.js';
import Modelo_tres from './components/Modulo_tres.js';
import Modulo_cuatro from './components/Modulo_cuatro.js';
import Modulo_cinco from './components/Modulo_cinco.js';
import Modulo_seis from './components/Modulo_seis.js';
import Modulo_siete from './components/Modulo_siete.js';
import Modulo_nueve from './components/Modulo_nueve.js';
import Modulo_ocho from './components/Modulo_ocho.js';


function App() {
  

  useEffect(() => {

    const timer = setTimeout(() => {
    const loader = document.getElementById('preloader-global');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 300); // 1 segundo es suficiente

    return () => {
      clearTimeout(timer); // Limpieza del timeout
    };
  }, []);


  return (
      <div className="grid-container">
        
        <Modulo_uno />
        <Modulo_dos />
        <Modelo_tres />
        <Modulo_cuatro />
        <Modulo_cinco />
        <Modulo_seis />
        <Modulo_siete />
        <Modulo_nueve />
        <Modulo_ocho />
         
    </div>
  )
}

export default App
