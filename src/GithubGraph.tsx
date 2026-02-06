import { useState, useEffect } from "react";

// 1. Interfaces estrictas para que TypeScript no se queje
interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: { [year: string]: number };
  contributions: Contribution[];
}

const GithubGraph = () => {
  // CAMBIA ESTO POR TU USUARIO REAL
  const username = "FlorCardinali"; 
  
  const [data, setData] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const json: ApiResponse = await res.json();
        
        // TRUCO VISUAL:
        // Tomamos los últimos 133 días (aprox 19 semanas) para que llene el ancho del mod-9
        // Si hay menos datos, no se rompe.
        const slicedData = (json.contributions || []).slice(-133);
        setData(slicedData);
      } catch (error) {
        console.error("Error Github:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Función de colores usando TUS variables del theme
  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-pinky-border-pink"; // Vacío (apenas visible)
      case 1: return "bg-pinky-soft/40";
      case 2: return "bg-pinky-soft/70";
      case 3: return "bg-pinky-pink";
      case 4: return "bg-pinky-pink shadow-[0_0_5px_var(--color-pinky-pink)]";
      default: return "bg-pinky-border-pink";
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      
      <h3 className="text-pinky-muted text-xl uppercase tracking-[0.2em] mb-2 font-semibold">
        Github Activity
      </h3>

      {loading ? (
        <p className="text-pinky-muted text-sm animate-pulse">Syncing...</p>
      ) : (
        <div className="grid grid-rows-7 grid-flow-col gap-1">
          {data.map((item) => (
            <div
              key={item.date}
              className={`w-3.5 h-3.5 rounded-[1px] ${getColor(item.level)} hover:scale-125 transition-transform duration-200`}
              title={`${item.date}: ${item.count} commits`}
            />
          ))}
        </div>
      )}

      {/* Referencia de niveles (Footer) */}
      <div className="flex items-center gap-2 text-[16px] text-pinky-muted mt-3 opacity-60 font-mono">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-[1px] bg-pinky-card border border-pinky-border-pink"></div>
          <div className="w-2 h-2 rounded-[1px] bg-pinky-soft/60"></div>
          <div className="w-2 h-2 rounded-[1px] bg-pinky-pink"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GithubGraph;