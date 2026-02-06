import { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Formateo para Argentina (es-AR)
  const timeString = date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Formato 24hs (más técnico)
  });


  return (
    <div className="clock-wrapper">
      <div className="clock-content">
        <h2 className="clock-time">{timeString}</h2>
      </div>
    </div>
  );
};

export default Clock;