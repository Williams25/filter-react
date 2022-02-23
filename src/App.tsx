import { Card } from "src/components/Card";
import { Filter } from "src/components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { useAnime } from "./hooks/useAnime";
import "./styles/home.css";

const App = () => {
  const { filtered } = useAnime();

  return (
    <div className="App">
      <div className="container">
        <Filter />

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
