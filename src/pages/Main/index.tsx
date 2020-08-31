import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import PaginationControl from "../../components/PaginationControl";
import { useTmdb } from "../../hooks/tmdb";

const Main: React.FC = () => {
  const { search, setSearch, renderList, setCurrentPage } = useTmdb();
  return (
    <>
      <Header />
      <Container>
        <SearchBar
          value={search}
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          onKeyDown={() => setCurrentPage(1)}
        />
        <MovieList moviesList={renderList} />
        <PaginationControl />
      </Container>
    </>
  );
};

export default Main;
