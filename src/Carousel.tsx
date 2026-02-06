import { useState, useEffect } from "react";
import "./Carrucel.css";
const Carousel = () => {
  const items = [
    { 
      id: 1, 
      title: "Catus S.A", 
      desc: "Proyect of frontend of Catus S.A",
      img: "/catus.jpeg" 
    },
    { 
      id: 2, 
      title: "Pacific Rental", 
      desc: "Landig page in construction for a bussiness of temporary apartment rental",
      img: "/depto.webp" 
    },
    { 
      id: 3, 
      title: "Cosmo Shoes", 
      desc: "Design of a Hero section for a shoes company",
      img: "/cosmoshoes.jpeg" 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container">
      {/* Riel de Slides */}
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-slide">
            
            {/* CAPA 1: La Imagen de Fondo */}
            <img src={item.img} alt={item.title} className="slide-image" />
            
            {/* CAPA 2: El Degradado Oscuro (Para que se lea el texto) */}
            <div className="slide-overlay"></div>

            {/* CAPA 3: Tu Texto (Título y Descripción) */}
            <div className="slide-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`indicator-dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;