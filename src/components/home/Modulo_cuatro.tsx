import { useState, useEffect, useRef } from "react";
import "./Modulo_cuatro.css";

const Modulo_cuatro = () => {
    const techs = [
        { name: "React", img: "https://cdn.simpleicons.org/react/ecb5d4" },
        { name: "Unity", img: "https://cdn.simpleicons.org/unity/white" },
        { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/f7df1e" },
        { name: "Tailwind", img: "https://cdn.simpleicons.org/tailwindcss/38bdf8" },
        { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Git", img: "https://cdn.simpleicons.org/git/f05032" },
        { name: "Figma", img: "https://cdn.simpleicons.org/figma/f24e1e" },
        { name: "HTML5", img: "https://cdn.simpleicons.org/html5/e34f26" },
        { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ];

    // TRUCO INFINITO: Agregamos el primero al final (Clon)
    const extendedTechs = [...techs, techs[0]];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true); 
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === techs.length) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false); 
                setCurrentIndex(0);
            }, 700);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, techs.length]);

    return (  
         <div className="mod-4">
            <div 
                className="tech-track" 
                style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? "transform 0.7s ease-in-out" : "none" 
                }}
            >
                {extendedTechs.map((tech, i) => {
                    // Calculamos si es el activo
                    const isActive = i === currentIndex || (currentIndex === techs.length && i === 0);
                    
                    return (
                        <div key={i} className="tech-slide">
                            <img 
                                src={tech.img} 
                                alt={tech.name} 
                                className={`
                                    transition-all duration-700 ease-in-out
                                    ${isActive 
                                        ? 'scale-130 mb-5 opacity-100 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]' 
                                        : 'scale-90 opacity-40 grayscale' /* Hacemos los inactivos más chicos y grises */
                                    }
                                `}
                            />

                            <span className={`tech-name transition-opacity duration-700 ${isActive ? 'opacity-100 text-pinky-pink' : 'opacity-50'}`}>
                                {tech.name}
                            </span>
                        </div>
                    )
                })}
            </div>

           
        </div>
    );
}
 
export default Modulo_cuatro;