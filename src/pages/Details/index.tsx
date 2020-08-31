import React, { useEffect, useState } from "react";

import {
  Container,
  MovieDetailsContainer,
  MovieDetailsHeader,
  MovieDetailsContent,
  MovieDetailsData,
  MovieDetailsCover,
  MovieDetailsOverview,
  MovieDetailsDivider,
  MovieDetailsInfo,
  MovieDetailsFooter,
  MovieDetailsCategories,
  MovieDetailsEmbedVideo,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import BlueCircle from "../../components/BlueCircle";
import { useRouteMatch } from "react-router-dom";
import tmdbApi from "../../services/tmdbApi";
import floatToPercentage from "../../utils/floatToPercentage";

interface IDetailsParams {
  movieid: string;
}

interface IMovieResponse {
  genres: {
    id: number;
    name: string;
  }[];
  budget: number;
  revenue: number;
  overview: string;
  poster_path: string;
  status: string;
  title: string;
  vote_average: number;
  release_date: string;
  original_language: string;
  runtime: string;
  videos: {
    results: {
      key: string;
    }[];
  };
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<IDetailsParams>();
  const [movie, setMovie] = useState<IMovieResponse | null>(null);

  useEffect(() => {
    tmdbApi
      .get(
        `movie/${params.movieid}?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR&append_to_response=videos`
      )
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      });
  });

  return (
    <>
      <Header />
      <Container>
        {movie && (
          <>
            <MovieDetailsContainer>
              <MovieDetailsHeader>
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>
              </MovieDetailsHeader>
              <MovieDetailsContent>
                <MovieDetailsData>
                  <MovieDetailsOverview>
                    <h2>Sinopse</h2>
                    <MovieDetailsDivider />
                    <p>{movie.overview}</p>
                  </MovieDetailsOverview>
                  <MovieDetailsInfo>
                    <h2>Informações</h2>
                    <MovieDetailsDivider />
                    <ul>
                      <li>
                        <h3>Situação</h3>
                        <p>{movie.status}</p>
                      </li>
                      <li>
                        <h3>Idioma</h3>
                        <p>{movie.original_language}</p>
                      </li>
                      <li>
                        <h3>Duração</h3>
                        <p>{movie.runtime}min</p>
                      </li>
                      <li>
                        <h3>Orçamento</h3>
                        <p>${movie.budget}</p>
                      </li>
                      <li>
                        <h3>Receita</h3>
                        <p>${movie.revenue}</p>
                      </li>
                      <li>
                        <h3>Lucro</h3>
                        <p>${movie.revenue - movie.budget}</p>
                      </li>
                    </ul>
                  </MovieDetailsInfo>
                  <MovieDetailsFooter>
                    <MovieDetailsCategories>
                      {movie.genres.map((genre) => (
                        <Button key={genre.id}>{genre.name}</Button>
                      ))}
                    </MovieDetailsCategories>
                    <BlueCircle circleSize={120} fontSize={40}>
                      {floatToPercentage(movie.vote_average)}%
                    </BlueCircle>
                  </MovieDetailsFooter>
                </MovieDetailsData>
                <MovieDetailsCover
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                />
              </MovieDetailsContent>
            </MovieDetailsContainer>
            {movie.videos.results.length > 0 && (
              <MovieDetailsEmbedVideo
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
              />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Details;
