import { useState, useEffect } from "react";
import "./Carrucel.css"; // Asegurate que el nombre coincida con tu archivo

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
      desc: "Landing page for apartment rental", // Corregí typos leves
      img: "/depto.webp" 
    },
    { 
      id: 3, 
      title: "Cosmo Shoes", 
      desc: "Hero section for a shoes company",
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
      
      {/* NUEVO: El título que aparece en Hover */}
      <h2 className="projects-hover-title">Projects</h2>

      {/* Riel de Slides */}
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.img} alt={item.title} className="slide-image" />
            <div className="slide-overlay"></div>
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