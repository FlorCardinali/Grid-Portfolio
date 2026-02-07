import { useState, useEffect } from 'react';
import "./Modulo_uno.css"

const Modulo_uno = () => {

    const phrases = ["Scalable Architecture", "Intuitive Design", "Responsive Layouts"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
     const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3500);
    
    return () => clearInterval(interval);
    }, []);


    return (  
        <div className="mod-1">
          <h3>Full-Stack Developer</h3>
          <h1>Building digital experiences with</h1>
          <p key={phrases[index]} id='colorfull-text'>{phrases[index]}</p> 
        </div>
    );
}
 
export default Modulo_uno;