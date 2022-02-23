/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
  Dispatch,
} from "react";
import { http } from "src/services/axios";
import { Anime } from "src/types/Anime";

type AnimeData = {
  animes: Anime[];
  filtered: Anime[];
  setFiltered: Dispatch<React.SetStateAction<Anime[]>>;
  activeGenre: string;
  setActiveGenre: Dispatch<React.SetStateAction<string>>;
};

type AnimeProviderProps = {
  children: ReactNode;
};

export const animeContext = createContext({} as AnimeData);

export const AnimeProvider = ({ children }: AnimeProviderProps) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [filtered, setFiltered] = useState<Anime[]>([]);
  const [activeGenre, setActiveGenre] = useState<string>("");

  const fechAnimes = async (): Promise<void> => {
    const { data } = await http.get<Anime[]>(
      `animes?_sort=name,views&_order=asc`
    );
    setAnimes(data);
    setFiltered(data);
  };

  const filterAnimes = useCallback(async () => {
    const { data } = await http.get<Anime[]>(
      `animes/?category_like=${activeGenre}&_sort=name,views&_order=desc`
    );

    setFiltered(data);
  }, [activeGenre]);

  useEffect(() => {
    if (activeGenre === "") {
      setFiltered(animes);
    } else {
      filterAnimes();
    }
  }, [activeGenre]);

  useEffect(() => {
    fechAnimes();
  }, []);

  return (
    <animeContext.Provider
      value={{
        activeGenre,
        animes,
        filtered,
        setActiveGenre,
        setFiltered,
      }}
    >
      {children}
    </animeContext.Provider>
  );
};
