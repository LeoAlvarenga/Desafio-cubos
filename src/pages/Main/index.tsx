import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <MovieList />
      </Container>
    </>
  );
};

export default Main;
