import { useState, useEffect } from "react";
import "./Modulo_seis.css";
const Modulo_seis = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timeString = date.toLocaleTimeString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });



    return (
        <div className="mod-6 ">
            <time className="clock-time">{timeString} </time>
            <span className="text-clock">ARG</span>
        </div>
    );
}

export default Modulo_seis;