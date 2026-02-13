import { useState, useEffect } from 'react';
import "./Modulo_uno.css"

const Modulo_uno = () => {

  const phrases = ["Clean Code", "Solid Logic", "Modern Tech"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="mod-1">
      <div className="text-hero">
        <h1>Full-Stack Developer</h1>
        <span>Building digital experiences with
          <p key={phrases[index]} id='colorfull-text'>{phrases[index]}</p>
        </span>
      </div>
    </div>
  );
}

export default Modulo_uno;