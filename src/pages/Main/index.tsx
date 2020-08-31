import React, { useState, useCallback, useEffect } from "react";

import Header from "../../components/Header";

import { Container } from "./styles";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import PaginationControl from "../../components/PaginationControl";
import { IMoviesListResponse } from "../../config/interfaces";
import tmdbApi from "../../services/tmdbApi";

const Main: React.FC = () => {
  const [movieList, setMovieList] = useState<IMoviesListResponse>(
    {} as IMoviesListResponse
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      const parsedSearch = encodeURI(search);
      tmdbApi
        .get(
          `/search/movie?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR&region=BR&query=${parsedSearch}&page=1`
        )
        .then(res => {
          console.log(res.data)
          setMovieList(res.data)
        });
    }
  },[search]);

  const handleSearch = useCallback(async (search: string) => {
    setTimeout(() => {
      setSearch(search)
    }, 2000)
  }, []);
  return (
    <>
      <Header />
      <Container>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <MovieList moviesList={movieList.results} />
        <PaginationControl />
      </Container>
    </>
  );
};

export default Main;
