/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Anime } from "src/types/Anime";
import { http } from "src/services/axios";

import "./styles.css";

type FilterProps = {
  animes: Anime[];
  setFiltered: React.Dispatch<React.SetStateAction<Anime[]>>;
  activeGenre: string;
  setActiveGenre: React.Dispatch<React.SetStateAction<string>>;
};

export const Filter = ({
  animes,
  setFiltered,
  activeGenre,
  setActiveGenre,
}: FilterProps) => {
  const filterAnimes = async () => {
    const { data } = await http.get<Anime[]>(
      `animes/?category_like=${activeGenre}&_sort=name,views&_order=desc`
    );

    setFiltered(data);
  };

  useEffect(() => {
    if (activeGenre === "") {
      setFiltered(animes);
    } else {
      filterAnimes();
    }
  }, [activeGenre]);

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
