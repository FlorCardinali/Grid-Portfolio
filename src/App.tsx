import './App.css'
import {useEffect, useState } from 'react';
import Modulo_uno from './components/home/Modulo_uno.tsx';
import Modulo_dos from './components/home/Modulo_dos.tsx';
import Modelo_tres from './components/home/Modulo_tres.tsx';
import Modulo_cuatro from './components/home/Modulo_cuatro.tsx';
import Modulo_cinco from './components/home/Modulo_cinco.tsx';
import Modulo_seis from './components/home/Modulo_seis.tsx';
import Modulo_siete from './components/home/Modulo_siete.tsx';
import Modulo_ocho from './components/home/Modulo_ocho.tsx';

import AboutView from './components/about/AboutView.tsx';

type ViewState = 'home' | 'about';

function App() {
  
  const [view, setView] = useState<ViewState>('home');
  useEffect(() => {
    const timer = setTimeout(() => {
    const loader = document.getElementById('preloader-global');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 400); 
    return () => {
      clearTimeout(timer); 
    };
  }, []);


  return (

    <div className="app-main-layout">
      
      {/* VISTA HOME (GRID) */}
      {view === 'home' && (
        <div className="view-container animate-enter">
          <div className="grid-container">
            <Modulo_uno />
            <Modulo_dos onClick={() => setView('about')}/>
            <Modelo_tres />
            <Modulo_cuatro />
            <Modulo_cinco />
            <Modulo_seis />
            <Modulo_siete />
            <Modulo_ocho />
          </div>
        </div>
      )}
      {/* VISTA ABOUT ME */}
      {view === 'about' && (
        <div className="view-container animate-enter">
           {/* Pasamos función para volver */}
           <AboutView onBack={() => setView('home')} />
        </div>
      )}
    </div>
  )
}

export default App
