import { useAnime } from "src/hooks/useAnime";
import "./styles.css";

export const Filter = () => {
  const { activeGenre, setActiveGenre } = useAnime();

  return (
    <div className="filter-container">
      <button
        className={activeGenre === "" ? "active" : ""}
        onClick={() => setActiveGenre("")}
      >
        All
      </button>
      <button
        className={activeGenre === "action" ? "active" : ""}
        onClick={() => setActiveGenre("action")}
      >
        action
      </button>
      <button
        className={activeGenre === "drama" ? "active" : ""}
        onClick={() => setActiveGenre("drama")}
      >
        drama
      </button>
      <button
        className={activeGenre === "shounen" ? "active" : ""}
        onClick={() => setActiveGenre("shounen")}
      >
        shounen
      </button>
    </div>
  );
};
