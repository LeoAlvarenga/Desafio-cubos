import React, { HTMLAttributes, useCallback } from "react";

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
import floatToPercentage from "../../utils/floatToPercentage";
import formatDateBR from "../../utils/formattingDateBR";
import { useTmdb } from "../../hooks/tmdb";

interface IMovieListProps extends HTMLAttributes<HTMLDivElement> {
  moviesList: IMovie[];
}

const MovieList: React.FC<IMovieListProps> = ({ moviesList, ...restProps }) => {

  const { genres } = useTmdb();

  const handleGenres = useCallback((genreID: number) => {
    const genre = genres.find((genre) => genre.id === genreID);
    return genre?.name;
  }, [genres]);

  return (
    <Container>
      {moviesList &&
        moviesList.map((movie) => (
          <MovieContainer to={`/details/${movie.id}`} key={movie.id}>
            <MovieCover src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            <MovieContent>
              <BlueCircleContainer>
                <BlueCircle circleSize={72}>
                  {floatToPercentage(movie.vote_average)}%
                </BlueCircle>
              </BlueCircleContainer>
              <MovieHeader>
                <h1>{movie.title}</h1>
              </MovieHeader>
              <MovieInfo>
                <Date>{formatDateBR(movie.release_date)}</Date>
                <MovieOverviewWrap>
                  <p>{movie.overview}</p>
                </MovieOverviewWrap>
                <MovieCategoriesList>
                  {movie.genre_ids.map((genre) => (
                    <Button key={genre}>{handleGenres(genre)}</Button>
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
