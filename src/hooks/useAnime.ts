import { useContext } from "react";
import { animeContext } from "src/context/AnimesProvider";

export const useAnime = () => {
  const { activeGenre, animes, filtered, setActiveGenre, setFiltered } =
    useContext(animeContext);
  return {
    activeGenre,
    animes,
    filtered,
    setActiveGenre,
    setFiltered,
  };
};
