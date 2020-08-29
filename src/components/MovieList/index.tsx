import React from "react";

import { Container, MovieContainer, MovieCover, MovieInfo } from "./styles";

const MovieList: React.FC = () => {
  return (
    <Container>
      <MovieContainer>
          <MovieCover />
          <MovieInfo>
              
          </MovieInfo>
      </MovieContainer>
    </Container>
  );
};

export default MovieList;
