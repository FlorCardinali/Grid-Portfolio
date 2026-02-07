import "./Modulo_ocho.css";
import { useEffect, useState } from "react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: { [year: string]: number };
  contributions: Contribution[];
}


const Modulo_ocho = () => {
    const username = "FlorCardinali"; 
  
  const [data, setData] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const json: ApiResponse = await res.json();
        
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

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-pinky-border-pink"; 
      case 1: return "bg-pinky-soft/40";
      case 2: return "bg-pinky-soft/70";
      case 3: return "bg-pinky-pink";
      case 4: return "bg-pinky-pink shadow-[0_0_5px_var(--color-pinky-pink)]";
      default: return "bg-pinky-border-pink";
    }
  };
    return (  
        <div className="mod-8">
            <h3>Github Activity</h3>

            {loading ? (
                <p className="loading">Syncing...</p>
            ) : (
                <div className="github-grid-container">
                {data.map((item) => (
                    <div
                    key={item.date}
                    className={`item-git ${getColor(item.level)}`}
                    title={`${item.date}: ${item.count} commits`}
                    />
                ))}
                </div>
            )}

            {/* Referencia de niveles (Footer) */}
            <div className="references">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="ref-1"></div>
                    <div className="ref-2"></div>
                    <div className="ref-3"></div>
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
 
export default Modulo_ocho;