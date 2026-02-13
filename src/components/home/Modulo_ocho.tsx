import "./Modulo_ocho.css";
import { useEffect, useState } from "react";
import initialData from '../../data/githubData.json';

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

  const [data, setData] = useState<Contribution[]>(
    (initialData as unknown as ApiResponse).contributions.slice(-133)
  );

  useEffect(() => {
    const checkBackgroundUpdates = async () => {
      const CACHE_KEY = 'gh_contributions';
      const TIME_KEY = 'gh_last_fetch';
      const ONE_DAY = 24 * 60 * 60 * 1000;

      const lastFetch = localStorage.getItem(TIME_KEY);
      const now = Date.now();

      if (!lastFetch || (now - parseInt(lastFetch) > ONE_DAY)) {
        try {
          const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
          const json: ApiResponse = await res.json();

          if (json.contributions) {
            setData(json.contributions.slice(-133));
            localStorage.setItem(CACHE_KEY, JSON.stringify(json));
            localStorage.setItem(TIME_KEY, now.toString());
          }
        } catch (error) {
          console.error("Fallo silencioso al actualizar GitHub:", error);
        }
      } else {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const json: ApiResponse = JSON.parse(cachedData);
          setData(json.contributions.slice(-133));
        }
      }
    };

    checkBackgroundUpdates();
  }, [username]);

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-pinky-muted/10";
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

      <div className="github-grid-container">
        {data.map((item) => (
          <div
            key={item.date}
            className={`item-git ${getColor(item.level)}`}
            title={`${item.date}: ${item.count} commits`}
          />
        ))}
      </div>

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