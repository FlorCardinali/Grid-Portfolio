import { useState, useEffect } from "react";
import "./Modulo_seis.css";
const Modulo_seis = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timeString = date.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Formato 24hs (más técnico)
    });



    return (  
         <div className="mod-6 ">  
            <div className="clock-content">
                <h2 className="clock-time">{timeString} <span className="text-clock">ARG</span></h2>
            </div>     
        </div>
    );
}
 
export default Modulo_seis;