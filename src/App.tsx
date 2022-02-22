import { useState, useEffect } from "react";
import { http } from "src/services/axios";
import { Anime } from "./types/Anime";
import { Card } from "src/components/Card";
import { Filter } from "src/components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/home.css";

const App = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [filtered, setFiltered] = useState<Anime[]>([]);
  const [activeGenre, setActiveGenre] = useState<string>("");

  const fechAnimes = async () => {
    const { data } = await http.get<Anime[]>(
      `animes?_sort=name,views&_order=asc`
    );
    setAnimes(data);
    setFiltered(data);
  };

  useEffect(() => {
    fechAnimes();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Filter
          animes={animes}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />

        <motion.div className="pupular-movies">
          <AnimatePresence>
            {filtered.map((anime) => (
              <Card {...anime} key={anime.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
