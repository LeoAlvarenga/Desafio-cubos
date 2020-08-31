import React, { HTMLAttributes } from "react";

import {
  Container,
  MovieContainer,
  MovieCover,
  MovieContent,
  MovieHeader,
  Date,
  MovieInfo,
  MovieOverviewWrap,
  MovieCategoriesList,
  BlueCircleContainer,
} from "./styles";
import Button from "../Button";
import BlueCircle from "../BlueCircle";
import { IMovie } from "../../config/interfaces";

interface IMovieListProps extends HTMLAttributes<HTMLDivElement> {
  moviesList: IMovie[];
}

const MovieList: React.FC<IMovieListProps> = ({ moviesList, ...restProps }) => {
  return (
    <Container>
      {moviesList &&
        moviesList.map((movie) => (
          <MovieContainer key={movie.id}>
            <MovieCover src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            <MovieContent>
              <BlueCircleContainer>
                <BlueCircle circleSize={72}>
                  {Math.floor(movie.vote_average)}
                </BlueCircle>
              </BlueCircleContainer>
              <MovieHeader>
                <h1>{movie.title}</h1>
              </MovieHeader>
              <MovieInfo>
                <Date>{movie.release_date}</Date>
                <MovieOverviewWrap>
                  <p>{movie.overview}</p>
                </MovieOverviewWrap>
                <MovieCategoriesList>
                  {movie.genre_ids.map((genre) => (
                    <Button key={genre}>{genre}</Button>
                  ))}
                </MovieCategoriesList>
              </MovieInfo>
            </MovieContent>
          </MovieContainer>
        ))}
    </Container>
  );
};

export default MovieList;
