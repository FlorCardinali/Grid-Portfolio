import "./Modulo_cinco.css";
import { useState, useEffect } from "react";

const Modulo_cinco = () => {

  const items = [
    {
      id: 1,
      title: "Catus S.A",
      desc: "Proyect of frontend of Catus S.A",
      img: "/catus.webp"
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
      img: "/cosmoshoes.webp"
    },
    {
      id: 4,
      title: "IP Adress Tracker",
      desc: "A project to track IP addresses and display their location on a map",
      img: "/ip.webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);


  return (
    <div className="mod-5">
      <h2 className="projects-hover-title">Projects & Experiences</h2>

      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={item.id} className="carousel-slide">
            <img
              src={item.img}
              alt={item.title}
              className="slide-image"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

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
}

export default Modulo_cinco;