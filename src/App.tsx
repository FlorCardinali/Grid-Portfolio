import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const phrases = ["Scalable Architecture", "Intuitive Design", "Responsive Layouts"];
  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setTimeout(() => {
    const loader = document.getElementById('preloader-global');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 500); // 1 segundo es suficiente

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3500);

    return () => {
      clearTimeout(timer); // Limpieza del timeout
      clearInterval(interval); // Limpieza al desmontar
    };
  }, []);


  return (
      <div className="grid-container">
        
        {/* MODULO 1 */}
        <div className="mod-1">
          <h3>Full-Stack Developer</h3>
          <h1>Building digital experiences with
            <p key={phrases[index]} id='colorfull-text'>{phrases[index]}</p>
          </h1>
        </div>
        {/* MODULO 2 */}
        <div className="mod-2">2</div>
        {/* MODULO 3 */}
        <div className="mod-3">3</div>
        {/*  MODULO 4 */}
        <div className="mod-4">4</div>
        {/*  MODULO 5 */}
        <div className="mod-5">5</div>
        {/*  MODULO 6 */}
        <div className="mod-6">6</div>
        {/*  MODULO 7  */}
        <div className="mod-7">
        <h4 id='experience-years'>+3</h4>
        <p>Años de experiencia en proyectos</p>  
        </div>
        {/*  MODULO 8 */}
        <div className="mod-8">8</div>
        {/*  MODULO 9 */}
        <div className="mod-9">9</div>
        {/*  MODULO 10 */}
        <div className="mod-10">10</div>    
    </div>
  )
}

export default App
