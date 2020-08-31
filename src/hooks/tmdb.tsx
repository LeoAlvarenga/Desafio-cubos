import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { IMoviesListResponse, IMovie } from "../config/interfaces";
import tmdbApi from "../services/tmdbApi";
import { time } from "console";

interface ITmdbAuthContext {
  movieList: IMoviesListResponse;
  renderList: IMovie[];
  setRenderList(value: IMovie[]): void;
  search: string;
  page: number;
  setPage(value: number): void;
  setSearch(value: string): void;
  genres: IGenre[];
  currentPage: number;
  setCurrentPage(value: number): void;
}

interface IGenresResponse {
  genres: IGenre[];
}

interface IGenre {
  id: number;
  name: string;
}

const TmdbContext = createContext<ITmdbAuthContext>({} as ITmdbAuthContext);

const TmdbProvider: React.FC = ({ children }) => {
  let timer: number = 0;
  const [genres, setGenres] = useState<IGenre[]>([]);

  const [movieList, setMovieList] = useState<IMoviesListResponse>(
    {} as IMoviesListResponse
  );
  const [renderList, setRenderList] = useState<IMovie[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState<number>(1);


  useEffect(() => {
    async function genreRequest() {
        const res = await tmdbApi
          .get(
            "/genre/movie/list?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR"
          )
          
          const genresRes: IGenresResponse = res.data;
          setGenres(genresRes.genres);
      }

      genreRequest();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== "") {
        const parsedSearch = encodeURI(search);
        tmdbApi
          .get(
            `/search/movie?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR&region=BR&query=${parsedSearch}&page=1`
          )
          .then((res) => {
            console.log(res.data);
            setMovieList(res.data);
          });
      }
    }, 1500);

    return () => clearTimeout(timer)
  }, [search]);

  useEffect(() => {
    if (search !== "") {
      const parsedSearch = encodeURI(search);
      tmdbApi
        .get(
          `/search/movie?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR&region=BR&query=${parsedSearch}&page=${page}`
        )
        .then((res) => {
          console.log(res.data);
          const data: IMoviesListResponse = res.data;
          setMovieList((state) => ({
            ...state,
            page: data.page,
            results: [...state.results, ...data.results],
          }));
        });
    }
  }, [page]);

  return (
    <TmdbContext.Provider
      value={{
        movieList,
        page,
        renderList,
        search,
        setPage,
        setRenderList,
        setSearch,
        genres,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

function useTmdb(): ITmdbAuthContext {
  const context = useContext(TmdbContext);

  if (!context) {
    throw new Error("useTmdb must be used within a TmdbProvider");
  }

  return context;
}

export { TmdbProvider, useTmdb };
